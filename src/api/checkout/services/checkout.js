"use strict";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2018-09-24',
});
const bcrypt = require("bcryptjs");
const moment = require("moment");
const fs = require("fs");


/**
 * checkout service.
 */

module.exports = {
  createDynamicProductCheckoutURL: async (body) => {
    console.log("body", body);
    var line_of_items = [];
    var customerid = "";
    var coupon = "";
    var orderid = "";
    var customerEmail = "";
    var productDesc='';
    var discountCoupon ={

    }

    body.map(async (item, i) => {
      console.log("item", item);
      coupon = item.coupon;
      customerid = item.customerid;
      orderid = item.orderId;
      customerEmail = item.email;
      discountCoupon = item.discountCoupon
      if(productDesc!=''){
       
        productDesc = productDesc + ","+ item.name 
      }else{
        
        productDesc = productDesc + item.name 
      }
     
      line_of_items.push({
        price_data: {
          currency: item.default_price_data.currency,
          unit_amount: item.default_price_data.unit_amount_decimal,
          product_data: {
            name: item.name,
            //   description: item.name,
            images: item.images,
          }, 
    
        },
        quantity: item.qty,
      
      });
    });

    console.log("line_of_items,", line_of_items);

    return new Promise(async (resolve, reject) => {
      createCheckoutLink(line_of_items, coupon, customerid, customerEmail,productDesc,discountCoupon).then(
        (respData) => {
          
          updateOrderStripeId(respData.payment_intent, orderid);
          updateStripeSessionId(respData.id,orderid)
          
          resolve({
            url: respData.url,
            id: respData.payment_intent,
          });
        }
      );
    });
  },

  orderUpdateService: async (req) => {
    return new Promise(async (resolve, reject) => {
      const endpointSecret = process.env.STRIPE_WEBHOOK_KEY;
      let event;
      let status;
      let currentDate = moment().format("YYYY-MM-DD HH:mm:ss");
      try {
        const sig = req.request.header["stripe-signature"];
        event = req.request.body;
        // return true

        // event = stripe.webhooks.constructEvent(
        //   req.request.body,
        //   sig,
        //   endpointSecret
        // );

        // Handle the event
        //Check payment status
        switch (event.type) {
          case "payment_intent.canceled":
            status = "cancelled";
            const paymentIntent = event.data.object;
            // Then define and call a function to handle the event payment_intent.canceled
            break;
          case "payment_intent.created":
            status = "created";
            const paymentIntent1 = event.data.object;
            // Then define and call a function to handle the event payment_intent.created
            break;
          case "payment_intent.payment_failed":
            status = "failed";
            const paymentIntent2 = event.data.object;
            // Then define and call a function to handle the event payment_intent.payment_failed
            break;
          case "payment_intent.processing":
            status = "processing";
            const paymentIntent3 = event.data.object;
            // Then define and call a function to handle the event payment_intent.processing
            break;
          case "payment_intent.succeeded":
            status = "succeeded";

            const paymentIntent4 = event.data.object;
            // Then define and call a function to handle the event payment_intent.succeeded
            break;
          default:
            status = event.type;
            // console.log(`Unhandled event type ${event.type}`);
        }

        //  UPDATE ORDER AFTER PAYMENT
        try {
	  const charge = await fetchStripeCharge(event);
          // await strapi.db.connection.transaction(async (transacting) => {
          //update in order table
        
          const update = await strapi.db.query("api::order.order").update(
            {
              data: {
                orderStatus: status,
                receiptUrl: charge.receipt_url,
              },
              where: {
                stripeOrderId: event?.data?.object?.id,
              },
            }
            // { transacting }
          );
          // resolve(update);
          //  finding the enrollment  from the Orders table :---
          var enrolledUsers = [];
          var {
            CLIENT_URL,
            DEFAULT_PASSWORD,
            EMAIL_REPLY_TO,
            EMAIL_FROM,
            URL,
          } = process.env;
          //find order by stripe order id and order status succeeded
          const entry = await strapi.db.query("api::order.order").findOne({
            where: {
              $and: [
                {
                  stripeOrderId: event?.data?.object?.id,
                },
                {
                  orderStatus: "succeeded",
                },
              ],
            },
            select: [
              "id",
              "email",
              "discountCode",
              "totalPrice",
              "userId",
              "id",
              "finalPrice",
              "discountPrice",
              "discountType",
            ],
            populate: {
              OrderItems: {
                populate: {
                  Enrolls: true,
                },
              },
            },
          });

          let orderCourseData = [];

          //Get enroll user from order
          if (entry) {
            if (entry?.OrderItems !== null)
              entry.OrderItems.map((data) => {
                orderCourseData.push({});

                data.Enrolls.map((user) => {
                  enrolledUsers.push({
                    name: user.name,
                    lastname: user.lastname,
                    ptin: user.ptin,
                    email: user.email,
                    courseId: user.courseId || 0,
                    packageId: user.packageId || 0,
                  });
                });
              });

              let  totalAmountPaid;
              let  paymentStatus;
              let  discountCouponObj; 
              // console.log("event",event?.data?.object,"eventType",event.type);
           
              if(event.type =='payment_intent.succeeded' && event?.data?.object.status =='succeeded'){
                  totalAmountPaid = (event?.data?.object?.amount_received)/100 || 0;
                  paymentStatus = event?.data?.object.status || '';
                  discountCouponObj = JSON.parse(event?.data?.object?.metadata?.discountCoupon)  ;
                    
             
              }
       
            let  discountCouponEntry;
             if(discountCouponObj?.name!=''){
              try {
                discountCouponEntry = await strapi.entityService.findMany('api::discount-coupon.discount-coupon', {
                  fields: ['id','noOfRedemption','couponName'],
                  filters: { couponName: discountCouponObj.name }
                })
              } catch (error) {
                console.log("error",error);
              }
              
             }
            

             // udpate no of Redemption ;
              let userCouponEmail = [];

             if(discountCouponEntry?.length>0){
               const uniqueCouponEntry = discountCouponEntry.filter((cpn)=>{
               
                 return  discountCouponObj.name === cpn.couponName
               })
      
              const   updatedDiscountCouponEntry = await  updateDiscountCoupon(uniqueCouponEntry[0].id,uniqueCouponEntry[0].noOfRedemption)
             }

            
            const emdata = await orderConfirmationMail(
              totalAmountPaid,
              paymentStatus,
              entry,
              EMAIL_REPLY_TO,
              EMAIL_FROM,
              CLIENT_URL,
              URL
            );
            console.log("EmailData=>",emdata);

            // checking it is exist in DB or not
            for (let userData in enrolledUsers) {
              const existedUser = await strapi.db
                .query("plugin::users-permissions.user")
                .findOne({
                  where: {
                    email: enrolledUsers[userData].email,
                  },
                });

              var userId;
              const password = bcrypt.hashSync(DEFAULT_PASSWORD, 10);
              // IF  USER DOES NOT EXIST IN DB CREATE USER

              if (!existedUser) {
                const fullName = enrolledUsers[userData].name;
                const firstname = enrolledUsers[userData].lastname;
                const ptin = enrolledUsers[userData].ptin;
                const lastname = fullName[1] ? fullName[1] : fullName[0];
                const addedUser = await strapi.db
                  .query("plugin::users-permissions.user")
                  .create({
                    data: {
                      username: enrolledUsers[userData].email,
                      firstName: firstname,
                      lastName: lastname,
                      PTIN: ptin,
                      email: enrolledUsers[userData].email,
                      password: password,
                      provider: "local",
                      confirmed: true,
                      role: 1,
                    },
                  });
                userId = addedUser.id;
                // SENDING LOGIN CREDIANTIAL TO ENROLLED USER

                const email = await addedUser.email;

                //   EMAIL TEMPLATE  FOR NEW USER
                await loginCredentialMail(
                  email,
                  DEFAULT_PASSWORD,
                  EMAIL_REPLY_TO,
                  EMAIL_FROM,
                  CLIENT_URL
                );
              } else {
                userId = existedUser.id;
              }
              // CHECK ENROLLED USERS ENROLLED FOR PACKAGE OR COURSE
              // AND STORE THE COURSE ID IN AN ARRAY
              var userCoursePayload = [];
              if (enrolledUsers[userData].courseId !== 0) {
                userCoursePayload.push({
                  course: enrolledUsers[userData].courseId,
                  user: userId,
                });
              } else {
                // FINDING  ALL THE ID OF COURSE  OF PARTICULAR PACKAGE

                const packageContents = await strapi.db
                  .query("api::package.package")
                  .findOne({
                    where: {
                      id: enrolledUsers[userData].packageId,
                    },
                    populate: {
                      courses: true,
                    },
                  });
                // MAPING THROW PAKCAGE AND STORE COURSE ID IN "userCoursePayload"
                if (packageContents) {
                  packageContents.courses.map(async (courseData) => {
                    // CREATING USER COURSE BASED ON ID OF COURSES OF PACKAGES
                    userCoursePayload.push({
                      course: courseData.id,
                      user: userId,
                      courseStartDate: courseData.startDate,
                      courseEndDate: courseData.endDate,
                    });
                  });
                }
              }
              //Find course data
              let course = await strapi.db.query("api::course.course").findOne({
                where: {
                  id: userCoursePayload[0].course,
                },
                populate: { category: true },
              });

              // Check there are webinar for this course if not we create webinar and update course.
              course.startDate = moment(course.startDate)
                .utc(true)
                .format("YYYY-MM-DDTHH:mm:ss");
              course.endDate = moment(course.endDate)
                .utc(true)
                .format("YYYY-MM-DDTHH:mm:ss");

              if (
                course.category.title === "Live" &&
                moment(currentDate).isSameOrBefore(
                  moment(course.endDate).format("YYYY-MM-DD HH:mm:ss")
                ) &&
                moment(course.startDate).isSameOrBefore(
                  moment(course.endDate).format("YYYY-MM-DD HH:mm:ss")
                )
              ) {
                await updateCourse(course);
              }

              // CREATING USER COURSE :---------
              for (let payload in userCoursePayload) {
                // userCoursePayload.map(async (payload) => {
                // CHECKING IF USER COURSE IS ALREADY EXIST OR NOT
                const existedUserCourse = await strapi.db
                  .query("api::user-course.user-course")
                  .findOne({
                    where: {
                      $and: [
                        {
                          user: userCoursePayload[payload].user,
                        },
                        {
                          course: userCoursePayload[payload].course,
                        },
                      ],
                    },
                  });

                if (!existedUserCourse) {
                  const userData = await strapi.db
                    .query("plugin::users-permissions.user")
                    .findOne({
                      where: {
                        id: userCoursePayload[payload].user,
                      },
                    });
                  //Create Registrants
                  let registrant = "";
                  let registrantKey = "";
                  let joinUrl = "";

                  if (
                    course.category.title === "Live" &&
                    moment(currentDate).isSameOrBefore(
                      moment(course.endDate).format("YYYY-MM-DD HH:mm:ss")
                    ) &&
                    moment(course.startDate).isSameOrBefore(
                      moment(course.endDate).format("YYYY-MM-DD HH:mm:ss")
                    )
                  ) {
                    try {
                      registrant = await strapi
                        .service("api::user-course.user-course")
                        .createRegistraint(
                          userCoursePayload[payload].course,
                          userData
                        );
                      joinUrl = registrant?.joinUrl;
                      registrantKey = registrant?.registrantKey;
                    } catch (error) {
                      console.log("327", error);
                    }
                  }
                  // if (registrant.joinUrl) {
                  //Store joinUrl in user Course table
                   console.log("userCourse Creating...");
                   
                let userCourse=  await strapi.db.query("api::user-course.user-course").create({
                    data: {
                      course:userCoursePayload[payload].course,
                      user: userCoursePayload[payload].user,
                      status: "NotStarted",
                      purchasedOn: new Date().toISOString(),
                      publishedAt: new Date().toISOString(),
                      joinUrl,
                      registrantKey,
                    },
                  });
                
                  console.log("userCourse Created.");

                  // creating purchasedCourse TABLE

                  // savePurchasedDetails(userCoursePayload[payload],entry)
                  // } else {
                  //   reject("Error while creating registrants");
                  // }
                }

                // });
              }
            }

            // saving purchase detail 
            savePurchasedDetails(entry);

          } else {
            console.log("in else ");
          }

          resolve(update, "ok");
        } catch (err) {
          reject(err);
        }

        // ADDING ENROLLMENTS USER TO THE DATABASE
      } catch (err) {
        reject(`error --- ${err.message}`);
      }
    });
  },
};

async function fetchStripeCharge (event){
  try {    
    var latestCharge = await stripe.charges.retrieve(
      event?.data?.object?.latest_charge,
      {
        apiKey: process.env.STRIPE_SECRET_KEY
      }
    );
    return latestCharge; // Return the result or success message
  } catch (error) {
    throw error; // Rethrow the error to handle it in the calling function
  }
};

/*** CHECK  PRODUCT ***/
async function checkProduct(productName) {
  return new Promise(async (resolve) => {
    const product = await stripe.products.search({
      query: "name:'" + productName + "'",
    });
    resolve(product);
  });
}

/*** CREATE NEW PRODUCT ***/
async function createProduct(data) {
  return new Promise(async (resolve, reject) => {
    try {
      const product = await stripe.products.create(data);
      resolve(product);
    } catch (err) {
      reject(err);
    }
  });
}

/*** CREATE CHECKOUT LINK ***/
async function createCheckoutLink(data, coupon, customerid, customerEmail,productDesc,discountCoupon) {
  
  return new Promise(async (resolve, reject) => {
    try {
      var discounts =
        coupon != ""
          ? [
              {
                coupon: coupon,
              },
            ]
          : [];
      var paymentLink;
      const sessionData = {
        payment_method_types: ["card"],
        line_items: data,
        mode: "payment", // payment,
        payment_intent_data:{
          description:productDesc,
          metadata : {discountCoupon : JSON.stringify(discountCoupon)}
        },
      
        // discounts: discounts,
        success_url: `${process.env.STRIPE_PAYMENT_SUCCESS_URL}?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: process.env.STRIPE_PAYMENT_FAIL_URL,
      };

      if (customerid != "" && customerid != "undefined") {
        sessionData.customer = customerid;
        paymentLink = await stripe.checkout.sessions.create(sessionData);
      } else if (customerEmail != "" && customerEmail != "undefined") {
        sessionData.customer_email = customerEmail;
        paymentLink = await stripe.checkout.sessions.create(sessionData);
      } else {
        paymentLink = await stripe.checkout.sessions.create(sessionData);
      }

      // console.log("paymentLink = ", paymentLink);
      resolve(paymentLink);
    } catch (err) {
      //  console.log("createCheckoutLink = ", err);
      reject(err);
    }
  });
}

/*** CREATE CHECKOUT LINK ***/
async function updateOrderStripeId(stripeId, orderId) {
  try {
    // await strapi.db.connection.transaction(async (transacting) => {
    const update = await strapi.db.query("api::order.order").update(
      { data: { stripeOrderId: stripeId }, where: { id: orderId } }
      // { transacting }
    );
    ///   console.log(update);
    // });
  } catch (err) {
    // console.log("err -- ", err)
  }
}
async function updateStripeSessionId(sessionId, orderId) {
  try {
    // await strapi.db.connection.transaction(async (transacting) => {
    const update = await strapi.db.query("api::order.order").update(
      { data: { stripeSessionId: sessionId }, where: { id: orderId } }
      // { transacting }
    );
    ///   console.log(update);
    // });
  } catch (err) {
    // console.log("err -- ", err)
  }
}
// Check there are webinar for this course if not we create webinar and update course.
async function updateCourse(course, ctx) {
  return new Promise(async (resolve, reject) => {
    //Get Course Data
    const courseData = await strapi.db.query("api::course.course").findOne({
      where: {
        id: course.id,
      },
    });
    //If webinarId not exist then Create Webinar
    if (!courseData.webinarId) {
      let data = {
        title: courseData.title,
        shortDesc: courseData.shortDesc,
        startDate: courseData.startDate,
        endDate: courseData.endDate,
        duration: data.duration,
        zoomAccount: courseData.zoomAccount
      };

      let webinarData = await strapi
        .service("api::user-course.user-course")
        .createWebinar(data);
      if (webinarData.id) {
        //Update webinarId in course
        await strapi.db.query("api::course.course").update({
          where: {
            id: course.id,
          },
          data: {
            webinarId: webinarData.id,
          },
        });
        resolve(true);
      } else {
        reject("Error while creating webinar");
      }
    } else {
      resolve(true);
    }
  });
}

//  SENDDING ORDER CNFIRMATION MAIL

async function orderConfirmationMail(
  totalAmountPaid,
  paymentStatus,
  data,
  EMAIL_REPLY_TO,
  EMAIL_FROM,
  CLIENT_URL,
  URL
) {
  return new Promise(async (resolve, reject) => {

  try {
    let liveDefaultTemp = `<head>
    <title>hello</title>
    
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans|Pinyon+Script|Rochester">
    <style>
      
   .cursive {
     font-family: 'Pinyon Script', cursive;
   }
   
   .sans {
     font-family: 'Open Sans', sans-serif;
   }
   
   .bold {
     font-weight: bold;
   }
   
   .block {
     display: block;
   }
   
   .underline {
     border-bottom: 1px solid #777;
     padding: 5px;
     margin-bottom: 15px;
   }
   
   .margin-0 {
     margin: 0;
   }
   
   .padding-0 {
     padding: 0;
   }
   
   .pm-empty-space {
     height: 40px;
     width: 100%;
   }
   
   body {
     padding: 10px 0;
     background: #ccc;
   }
   
   .pm-certificate-container {
     position: relative;
     width: 800px;
     height: 600px;
     background-color: #618597;
     padding: 30px;
     color: #333;
     font-family: 'Open Sans', sans-serif;
     box-shadow: 0 0 5px rgba(0, 0, 0, .5);
     /*background: -webkit-repeating-linear-gradient(
       45deg,
       #618597,
       #618597 1px,
       #b2cad6 1px,
       #b2cad6 2px
     );
     background: repeating-linear-gradient(
       90deg,
       #618597,
       #618597 1px,
       #b2cad6 1px,
       #b2cad6 2px
     );*/
     
     .outer-border {
       width: 794px;
       height: 594px;
       position: absolute;
       left: 50%;
       margin-left: -397px;
       top: 50%;
       margin-top:-297px;
       border: 2px solid #fff;
     }
     
     .inner-border {
       width: 730px;
       height: 530px;
       position: absolute;
       left: 50%;
       margin-left: -365px;
       top: 50%;
       margin-top:-265px;
       border: 2px solid #fff;
     }
   
     .pm-certificate-border {
       position: relative;
       width: 720px;
       height: 520px;
       padding: 0;
       border: 1px solid #E1E5F0;
       background-color: rgba(255, 255, 255, 1);
       background-image: none;
       left: 50%;
       margin-left: -360px;
       top: 50%;
       margin-top: -260px;
   
       .pm-certificate-block {
         width: 650px;
         height: 200px;
         position: relative;
         left: 50%;
         margin-left: -325px;
         top: 70px;
         margin-top: 0;
       }
   
       .pm-certificate-header {
         margin-bottom: 10px;
       }
   
       .pm-certificate-title {
         position: relative;
         top: 40px;
   
         h2 {
           font-size: 34px !important;
         }
       }
   
       .pm-certificate-body {
         padding: 20px;
   
         .pm-name-text {
           font-size: 20px;
         }
       }
   
       .pm-earned {
         margin: 15px 0 20px;
         .pm-earned-text {
           font-size: 20px;
         }
         .pm-credits-text {
           font-size: 15px;
         }
       }
   
       .pm-course-title {
         .pm-earned-text {
           font-size: 20px;
         }
         .pm-credits-text {
           font-size: 15px;
         }
       }
   
       .pm-certified {
         font-size: 12px;
   
         .underline {
           margin-bottom: 5px;
         }
       }
   
       .pm-certificate-footer {
         width: 650px;
         height: 100px;
         position: relative;
         left: 50%;
         margin-left: -325px;
         bottom: -105px;
       }
     }
   }
   
   
    </style>
    
    
    <style>
    .imgStyle{
      height =100px;
      width=100px;
 
    }
   
     .tbl {
     width: 75%
   
     }
   .tbl tr td {
   padding-left:15px;
   padding-right:15px;
   }
     .coursePrice{
       width:30%
     
     }.courseimg{
       width:30%
       
     }.coursedetail{
       width:40%
     }
    </style>
   </head>
    <body>
     
      <p><b>Thanks for your purchase! Below is a confirmation of your order.</b></p>
      
      <p>Total: $<%= (Math.round(totalPrice * 100) / 100).toFixed(2) %> (Coupon Applied: <%=dCode%>)</p> 
  
      <% for(var i=0; i <length; i++) { %>               
     <table class="tbl">
     <tr>
     <td class="courseimg" style="
   padding-left:0px;
   padding-right:20px;"
   > 
     <div class="imgStyle" >
     <img src="<%= URL %><%=items[i].imageUrl  %>" alt="img"  style="height:100px;width:100px;">
     </div>
    
     </td>
     <td class="coursedetail"  style="
   padding-left:20px;
   padding-right:20px;"> 
     <p style="color:#007eff;"> <%= items[i].title %> </p>
     </td>
     <td class="coursePrice"  style="
   padding-left:20px;
   padding-right:20px;">
      
     </td>
     </tr>
     </table
   
     <% } %>       
   
    <p><b>Please note the below mentioned points: </b></p>
    <p>- Your log-in details will be provided 24hrs before the start of the event. <br>
   
    - Please make sure that you are attentive during the course to answer your CPE questions. For self-study, please answer the review questions and the final exam <br>
    
    - Your credit card statement will show Asterid Group Inc. which is the parent company of CPE Warehouse. <br>
    
    - Questions? Reply to this email
    </p>
    <p><a style=" background-color: yellow;" href="<%= DashboardLink %>"><b><u >View your Dashboard</u></b><a/></p>
    <p>Engage with us on Social media for discussions, tax updates and new upcoming events.</p>
   
    <% for(var i=0; i <socialLinks.length; i++) { %>
      <p>-<%= socialLinks[i].network %>:<a href="<%= socialLinks[i].url %>"><u><%= socialLinks[i].url %></u><a/></p>
     
      <% } %>        
   
    <p>Look forward to your participation.</p>
    <p>Team CPE Warehouse</p>
    
   
   </body>`;

    const gData = await strapi.db.query("api::global.global").findOne({
      where: {
        id: 1,
      },
      select: ["notificationEmail"],
      populate: {
        socialLinks: true,
        EmailTemplates: {
          populate: {
            template: true,
          },
        },
      },
    });
    let cc
    if(gData.notificationEmail){
       cc = gData?.notificationEmail.split(",") || EMAIL_REPLY_TO;
    }else{
      cc = EMAIL_REPLY_TO
    }
    
   

    const { socialLinks } = gData;

    const { email, discountCode, finalPrice , id} = data;
    // console.log("data",data);
    let totalPrice ;
    
    if(totalAmountPaid >0 && paymentStatus == 'succeeded'){
      // console.log("in if stripe",totalAmountPaid);
      totalPrice = totalAmountPaid || finalPrice
    }else{
     
     totalPrice = finalPrice 
    //  console.log("totalAm++",totalPrice);
    }

   // console.log("total price and final price",totalPrice,finalPrice);
       //totalPrice = finalPrice;
    const items = data.OrderItems;
    const length = items.length;
    const notApplied = "NotApplied";
    let dCode;
    if (discountCode != '') {  
      dCode = discountCode;
    } else {
      
      dCode = "Not Applied";
    }

    
    // fetching email templates

    const orderConfTempData = gData.EmailTemplates.filter((value) => {
      return value.templateName === "orderConfirmation";
    });

    let DashboardLink = `${CLIENT_URL}/learner/dashboard`;

    // reading the html file from url
    if (orderConfTempData && orderConfTempData[0]?.template?.url != null) {
      let orderConfHtmlUrl = `public${orderConfTempData[0]?.template?.url}`;
      let subject = `${orderConfTempData[0].subject} #${id}`;
      let orderConfHtml;

      fs.readFile(orderConfHtmlUrl, "utf8", function (err, html) {
        if (err) {
          console.log("<==err==>", err);
        } else {
          let check = isValidEmailTemplate(html);
          console.log("isValidEmailTemplate", check);
          if (check) {
            orderConfHtml = html
              .replace(
                "{{totalPrice}}",
                "<%= (Math.round(totalPrice * 100) / 100).toFixed(2) %>"
              )
              .replace(
                "{{CourseIterationStart}}",
                "<% for(var i=0; i <length; i++) { %>"
              )
              .replace(
                "{{baseURL}}{{imageUrl}}",
                "<%= URL %><%=items[i].imageUrl  %>"
              )
              .replace("{{title}}", "<%= items[i].title %>")
              // .replace('{{price}}','<%=(Math.round(items[i].finalPrice * 100) / 100).toFixed(2)%>')
              .replace("{{discountCode}}", "<%=dCode%>")
              .replace("{{courseIterationEnd}}", "<% } %>")
              .replace("{{dashboardUrl}}", "<%= DashboardLink %>")
              .replace(
                "{{socialLinksIterationStart}}",
                " <% for(var i=0; i <socialLinks.length; i++) { %>"
              )
              .replace("{{socialLinksUrl}}", "<%= socialLinks[i].url %>")
              .replace("{{socialLinksIterationEnd}}", "<% } %>")
              .replace("{{socialLinksName}}", "<%= socialLinks[i].network %>")
              .replace("{{socialLinksUrl}}", "<%= socialLinks[i].url %>");
            sendTempEmail(orderConfHtml, subject);
          }
          //   IF  GIVEN TEMPLATE IS  WRONG   CHECK  RETURN FALSE
          else {
            console.log("in else if template is wrong");
            let subject = `Order Confirmation # ${id}` ;
            sendTempEmail(liveDefaultTemp, subject);
          }
        }
      });
    } //  IF TEMPLATE IS NOT FOUND USE DEFAULT TEMPLATE
    else {
      console.log("in else if template is not found");
      let subject = `Order Confirmation #${id}`;
      sendTempEmail(liveDefaultTemp, subject);
    }

    function isValidEmailTemplate(html) {
      let isValid = true;
      let keyword = [
        "{{totalPrice}}",
        "{{CourseIterationStart}}",
        "{{baseURL}}",
        "{{imageUrl}}",
        "{{title}}",
        "{{discountCode}}",
        "{{courseIterationEnd}}",
        "{{dashboardUrl}}",
        "{{socialLinksIterationStart}}",
        "{{socialLinksUrl}}",
        "{{socialLinksIterationEnd}}",
        "{{socialLinksName}}",
        "{{socialLinksUrl}}",
      ];

      for (let i = 1; i < keyword.length; i++) {
        let result = html.includes(keyword[i]);

        if (!result) {
          isValid = false;
          break;
        }
      }

      return isValid;

      // const isValid = html.includes("{{totalPrice}}","{{CourseIterationStart}}",
      //  "{{baseURL}}","{{imageUrl}}","{{title}}","{{price}}",
      //  "{{discountCode}}","{{courseIterationEnd}}","{{dashboardUrl}}","{{socialLinksIterationStart}}",
      //  "{{socialLinksUrl}}","{{socialLinksIterationEnd}}","{{socialLinksName}}","{{socialLinksUrl}}"
      //  )

      //  return isValid;
    }
    function sendTempEmail(orderConfHtml, subject) {
      try {
        console.log("OrderConfirmation Mail Sending...."+ "subject=>",subject);
        const emailTemplate = {
          subject: subject,
          text: "text",
          html: orderConfHtml,
        };
        strapi.plugins["email"].services.email.sendTemplatedEmail(
          {
            to: email,
            replyTo: EMAIL_REPLY_TO,
            from: EMAIL_FROM,
            cc: cc,
           // bcc:cc,
            // from: is not specified, so it's the defaultFrom that will be used instead
          },
          emailTemplate,
          {
            items,
            email,
            CLIENT_URL,
            length,
            totalPrice,
            dCode,
            notApplied,
            socialLinks,
            URL,
            DashboardLink,
          }
        );
        console.log(" OrderConfirmation Mail Sent");
      } catch (error) {
        console.log("error=>",error);
      }
    
    }
    // console.log("console...991");
      resolve('Resolve=>Email Sent')
  } catch (error) {
    console.log("error email", error);
     reject("Error while Sending Mail");
    //resolve('Resolve=>Email Sent')
  }
  })

}

async function loginCredentialMail(
  email,
  DEFAULT_PASSWORD,
  EMAIL_REPLY_TO,
  EMAIL_FROM,
  CLIENT_URL
) {
  try {
    const loginUrl = `${CLIENT_URL}/auth/login`;

    const gData = await strapi.db.query("api::global.global").findOne({
      where: {
        id: 1,
      },
      populate: {
        //  socialLinks: true,
        EmailTemplates: {
          populate: {
            template: true,
          },
        },
      },
    });

    // fetching the email template and subject
    const logCredTempData = gData.EmailTemplates.filter((value) => {
      return value.templateName === "loginCredential";
    });

    if (logCredTempData && logCredTempData[0]?.template?.url != null) {
      let logCredHtmlUrl = `public${logCredTempData[0]?.template?.url}`;
      let subject = logCredTempData[0].subject;
      let logCredHtml;

      // reading the html file from url
      fs.readFile(logCredHtmlUrl, "utf8", function (err, html) {
        if (err) {
         console.log("ERR==>",err);
        } else {
          logCredHtml = html
            .replace("{{email}}", "<%= email %>")
            .replace("{{defaultPassword}}", "<%= DEFAULT_PASSWORD %>")
            .replace("{{loginUrl}}", "<%= loginUrl %>");

          sendTempEmail(logCredHtml, subject);
        }
      });
    }

    function sendTempEmail(logCredHtml, subject) {
      console.log("Log In Cred Mail sending...");
      const emailTemplate = {
        subject: subject,
        text: "text",
        html: logCredHtml,
      };
      const emailRes = strapi.plugins[
        "email"
      ].services.email.sendTemplatedEmail(
        {
          to: email,
          replyTo: EMAIL_REPLY_TO,
          from: EMAIL_FROM,
         // bcc:BCC_EMAIL || 'cpewarehouses@gmail.com',
          // from: is not specified, so it's the defaultFrom that will be used instead
        },
        emailTemplate,
        {
          email,
          DEFAULT_PASSWORD,
          loginUrl,
        }
      );
      console.log("Log In Cred Mail Sent");
    }
  } catch (error) {
    reject("Error while Sending Mail");
  }
}

// purchasedCourse table

async function savePurchasedDetails(orderEntry) {
  console.log("purchaseCourse Entry Creating.....");
  try {
    //console.log("userCourse", orderEntry);
    if (orderEntry) {
     

      // calling the course and package api
      if (orderEntry.OrderItems.length != 0) {
        orderEntry.OrderItems.map(async (data) => {
         // console.log("data", data);
          if (data.courseId != 0) {
            let userData;
            const courseData = await strapi.db
              .query("api::course.course")
              .findOne({
                where: {
                  id: data.courseId,
                },

                populate: ["instructors", "category"],
              });

            data.Enrolls.map(async (enroll) => {
             console.log("enroll in courses", enroll);
              const userEmail = enroll.email;

              // finding user email from enrolls and finding user data
              userData = await strapi.db
                .query("plugin::users-permissions.user")
                .findOne({
                  where: {
                    email: userEmail,
                  },
                  select: ["id", "email"],
                });
             // console.log("userData", userData);
              if (courseData && userData) {
                const isPackage = false;
                
                createPurchaseItems(userData, courseData, data, isPackage);
                console.log("course creation in purchase detail");
              }
            });
          } else {
            let userData;
            const packageData = await strapi.db
              .query("api::package.package")
              .findOne({
                where: {
                  id: data.packageId,
                },

                populate: ["category"],
              });

            data.Enrolls.map(async (enroll) => {
              console.log("enroll in package", enroll);
              const userEmail = enroll.email;

              // finding user email from enrolls and finding user data
              userData = await strapi.db
                .query("plugin::users-permissions.user")
                .findOne({
                  where: {
                    email: userEmail,
                  },
                  select: ["id", "email"],
                });

              if (packageData && userData) {
                const isPackage = true;
                createPurchaseItems(userData, packageData, data, isPackage);
                console.log("package creation in purchase detail");
              }
            });
          }
        });
      }
    }

    async function createPurchaseItems(
      userData,
      itemsData,
      orderItems,
      isPackage
    ) {
      // console.log(
      //   "user",
      //   userData,
      //   "order",
      //   orderItems,
      //   "itemsData",
      //   itemsData
      // );
      let data = {
        user: userData?.id,
        userEmail: userData?.email,
        title: itemsData.title,
        purchaseDate: new Date().toISOString(),
        purchaseTime: new Date().toISOString(),
        amount: orderItems.price || 0,
        amountDiscounted:
          (orderItems?.price || 0) - (orderItems?.finalPrice || 0),
        amountNet: orderItems.finalPrice || 0,
        category: itemsData?.category?.id,
        certificateStatus: "Not Granted",
        courseStartDate: itemsData?.startDate,
        courseEndDate: itemsData?.endDate,
        courseSessionDuration: itemsData?.duration || 0,
        durationUnit: itemsData?.durationUnit || "",
        programNumber: itemsData?.programNumber || "",
        discountCode: orderEntry?.discountCode || "",
        publishedAt: new Date(),
        // faculty: !isPackage
        //   ? (itemsData.instructor?.firstName || "") +
        //     " " +
        //     (itemsData.instructor?.lastName || "")
        //   : "",
        order: orderEntry?.id,
        couponValue: orderEntry?.discountPrice,
        couponType: orderEntry?.discountType,
        isPackage: isPackage,
      };

      if (isPackage == true) {
        data.package = itemsData?.id;
      } else {
        data.course = itemsData?.id;

        console.log("itemData",itemsData.instructors);
         let name = [];
       let instructorName ;

        
        if(itemsData.instructors.length>1){
          itemsData.instructors.forEach((element) => {
        let instructname= element?.firstName + " " + element?.lastName
         name.push(instructname)
          });
          instructorName=name.join(',')
        }
        else if(itemsData.instructors.length==0){
          instructorName =''
        }
        else{
          instructorName=itemsData.instructors[0]?.firstName + " " + itemsData.instructors[0]?.lastName
        }

        data.faculty = instructorName;
      }
      
      const entry = await strapi.db
        .query("api::purchased-course.purchased-course")
        .create({
          data,
        });

   // console.log("purchased Details Entry", entry);
    }
  } catch (error) {
    console.log("Error In SavePurchaseDetails=>", error);
  }





  // calling  the course api
  //  if(userCourse && orderEntry){

  //  const courseData = await strapi.db
  //  .query("api::course.course")
  //  .findOne({
  //    where: {
  //      id: userCourse.course
  //    },

  //    populate: ["instructor", "category" ],

  //  });

  //  console.log("order Entry");
  //  //calling the userapi
  //  const userData = await strapi.db
  //  .query("plugin::users-permissions.user")
  //  .findOne({
  //    where: {
  //      id: userCourse.user
  //    },
  //    select:['email']

  //  });

  // // creating entry in purchased table

  // let orderItemsLength = orderEntry.OrderItems.length;
  // if( userData && courseData){
  //     let netAmount ;
  //     if(orderEntry.discountCode && orderEntry.discountType =='percentOff'){
  //       netAmount = (courseData.discount || courseData.price) - ((courseData.discount || courseData.price)*orderEntry.discountPrice)/100
  //     }else if(orderEntry.discountCode && orderEntry.discountType =='amountOff'){
  //       netAmount = (courseData.discount || courseData.price) - (orderEntry.discountPrice/orderItemsLength)
  //     }
  //     else{
  //       netAmount = courseData.discount || courseData.price ;
  //     }
  console.log("purchaseCourse Entry Created");
}
async function updateDiscountCoupon(id,noOfRedemption ){
  const entry = await strapi.entityService.update('api::discount-coupon.discount-coupon', id, {
    data: {
      noOfRedemption: noOfRedemption + 1 ,
      
    }
  })
 
}