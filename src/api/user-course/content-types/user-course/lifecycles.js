const { ValidationError } = require("@strapi/utils").errors;
const moment = require("moment");
const currentDate = moment().format("YYYY-MM-DD HH:mm:ss");
const fs = require("fs");
var { CLIENT_URL, EMAIL_REPLY_TO, EMAIL_FROM  } = process.env;
module.exports = {
  async beforeCreate(event) {

    try {
      console.log("beforeCreating...");
    const { data } = event.params;

    if (!data.course) {
      //if course in not selected it will throw error
      throw new ValidationError("Course not found");
    }

    if (!data.user) {
      //if user is not created it will throw error
      throw new ValidationError("User not found");
    }

    let courseData;
    if (data.course) {
      courseData = await strapi.db
        .query("api::course.course")
        .findOne({ where: { id: data.course }, populate: { category: true } });
    }

    if (courseData && courseData.category.title === "Live" && !data.joinUrl) {
      const course = await strapi.db
        .query("api::course.course")
        .findOne({ where: { id: data.course } });
      const user = await strapi.db
        .query("plugin::users-permissions.user")
        .findOne({ where: { id: data.user } });

      //check webinarId exist in course or not if not it will create and store webinarId
      await checkWebinarExist(course);
      //check user have the course or not if exist it will throw error
      await checkUserCourseExist(user, course);

      //format start date and end date
      course.startDate = moment(course.startDate)
        .utc(true)
        .format("YYYY-MM-DDTHH:mm:ss");
      course.endDate = moment(course.endDate)
        .utc(true)
        .format("YYYY-MM-DDTHH:mm:ss");

      //check end date is before current date and end date is before start date or not
      if (
        moment(currentDate).isSameOrBefore(
          moment(course.endDate).format("YYYY-MM-DD HH:mm:ss")
        ) &&
        moment(course.startDate).isSameOrBefore(
          moment(course.endDate).format("YYYY-MM-DD HH:mm:ss")
        )
      ) {
        //create registrant and store in db
        const registrant = await strapi
          .service("api::user-course.user-course")
          .createRegistraint(course.id, user);
          console.log("----registrant-------   :     ",registrant);
        if (registrant?.join_url) {
          data.joinUrl = registrant?.join_url;
          data.registrantKey = registrant?.registrant_id;
        } else {
          throw new ValidationError("error while creating Registrant");
        }
      }
    }
    } catch (error) {
      console.log("userCourse Before Create Error=>",error);
    }
    console.log("beforeCreate Lifecycle end");
  },

  async beforeUpdate(event) {
    console.log("LIFECYCLE>UserCourse>beforeUpdate ", event.params);

    const { data, where } = event.params;
    const query = { populate: "*" };

    let prevData;
    if (where?.id) {
      prevData = await strapi.entityService.findOne(
        "api::user-course.user-course",
        where.id,
        { ...query }
      );
    }
    //check data is published or not
    if (!data.publishedAt) {
      //check title short desc start date or end date is updated or not
      if (data.user || data.course) {
        if (
          prevData &&
          data.course &&
          prevData?.course &&
          (prevData?.course?.id !== data?.course ||
            prevData?.user?.id !== data?.user)
        ) {
          //find course
          const course = await strapi.db
            .query("api::course.course")
            .findOne({ where: { id: data.course } });
          //check course has webinarId or not
          if (course && course.webinarId && data.user) {
            //find updated user data
            const user = await strapi.db
              .query("plugin::users-permissions.user")
              .findOne({ where: { id: data.user } });
            //delete previous registrant from webinar
            if (prevData.course.webinarId) {
              await strapi
                .service("api::user-course.user-course")
                .deleteRegistrant(
                  prevData.course.webinarId,
                  prevData.registrantKey,
                  course.zoomAccount
                );
            }
            //check end date is before current date and end date is before start date or not
            if (
              moment(currentDate).isSameOrBefore(
                moment(course.endDate).format("YYYY-MM-DD HH:mm:ss")
              ) &&
              moment(course.startDate).isSameOrBefore(
                moment(course.endDate).format("YYYY-MM-DD HH:mm:ss")
              )
            ) {
              //create registrant for new user
              const registrant = await strapi
                .service("api::user-course.user-course")
                .createRegistraint(data.course, user);
              if (registrant.joinUrl) {
                data.joinUrl = registrant.joinUrl;
                data.registrantKey = registrant.registrantKey;
              }
              //If user already registred then throw error
              else {
                throw new ValidationError("User already registered");
              }
            }
          } else {
            //check end date is before current date and end date is before start date or not
            if (
              moment(currentDate).isSameOrBefore(
                moment(course.endDate).format("YYYY-MM-DD HH:mm:ss")
              ) &&
              moment(course.startDate).isSameOrBefore(
                moment(course.endDate).format("YYYY-MM-DD HH:mm:ss") && course
              )
            ) {
              //if course does not have webinarid then create webinar
              let webinarData = await strapi
                .service("api::user-course.user-course")
                .createWebinar(course);
              if (webinarData.id && data.user) {
                try {
                  data.webinarId = webinarData.id;
                  //update webinarid in course
                  await strapi.db.query("api::course.course").update({
                    where: { id: course.id },
                    data: { webinarId: webinarData.id },
                  });
                  const user = await strapi.db
                    .query("plugin::users-permissions.user")
                    .findOne({ where: { id: data.user } });
                  //delete registrant and create new for new course
                  if (prevData.course.webinarId && prevData.registrantKey) {
                    await strapi
                      .service("api::user-course.user-course")
                      .deleteRegistrant(
                        prevData.course.webinarId,
                        prevData.registrantKey,
                        course.zoomAccount
                      );
                  }
                  let registrant;
                  if (data.course && user) {
                    registrant = await strapi
                      .service("api::user-course.user-course")
                      .createRegistraint(data.course, user);
                  }
                  if (registrant.joinUrl) {
                    data.joinUrl = registrant.joinUrl;
                    data.registrantKey = registrant.registrantKey;
                  } else {
                    throw new ValidationError("User already registered");
                  }
                } catch (error) {
                  console.log(error);
                  throw new ValidationError("User already registered");
                }
              }
            } else {
              data.joinUrl = "";
              data.registrantKey = "";
            }
          }
        }
      }
    }
    console.log("LIFECYCLE>UserCourse>beforeUpdate finished");
  },

  async beforeDelete(event) {
    const { data, where, select, populate } = event.params;
    let course;
    let userCourse;
    if (where.id) {
      //find user course which want to delete
      userCourse = await strapi.db
        .query("api::user-course.user-course")
        .findOne({ where: { id: where.id }, populate: ["course", "user"] });
      if (userCourse && userCourse.course) {
        //find course for webinarId
        course = await strapi.db
          .query("api::course.course")
          .findOne({ where: { id: userCourse.course.id } });
      }
    }
    //if webinarId and registrant Key exist then delete registrant
    if (course.webinarId && userCourse.registrantKey) {
      await strapi
        .service("api::user-course.user-course")
        .deleteRegistrant(course.webinarId, userCourse.registrantKey, course.zoomAccount);
    }
  },

  //   sending certificate issues email to user

  async afterUpdate(event) {
    console.log("LIFECYCLE>UserCourse>afterUpdate ", event.params);
    const { data } = event.params;
    const { where } = event.params;
    const { user, course, status } = data;

    try {
      if (status == "Completed") {
        let emailId ;
        let courseTitle ;
        let courseId;
        let userId;
        let surveyLinkDetail="";
        let surveyLink ;

        let defaultHtml = `<p>Congratulations! You have successfully completed</p>
            <p style="color: blue";> <%= title %>.</p>
            <p><%= surveyLinkDetail %></p>
   <p> Log-in to your dashboard below to download your certificate.</p>


   <p ><a style=" background-color: blue; color:white;"  href="<%=DashboardLink%>">DASHBOARD<a/></p>

   <p>Reply to this email if you have any questions.</p>

   <p>Team CPE Warehouse</p>`;

        // fetching the template from global
        const gData = await strapi.db.query("api::global.global").findOne({
          where: {
            id: 1,
          },
          select: ["notificationEmail"],
          populate: {
            //  socialLinks: true,
            EmailTemplates: {
              populate: {
                template: true,
              },
            },
          },
        });
        let cc;
        if(gData.notificationEmail){
         cc = gData.notificationEmail.split(",") || EMAIL_REPLY_TO;
        }else{
          cc =EMAIL_REPLY_TO
        }


        // fetching the email template and subject
        const certTempData = gData?.EmailTemplates.filter((value) => {
          return value.templateName === "certificateIssue";
        });

        // finding userCourse


        // reading the html file from url

        // finding related user

        if (user && course) {
          console.log("user course exist", "195");
          const userDetail = await strapi.entityService.findOne(
            "plugin::users-permissions.user",
            user,
            {
              select: ["email","id"],
            }
          );

          emailId  = userDetail.email;

          userId = userDetail.id

          // finding related course
          const courseDetail = await strapi.entityService.findOne(
            "api::course.course",
            course,
            {
              select: ["title","id","surveyLink"],
            }
          );

           courseTitle   = courseDetail.title;
           courseId =courseDetail.id;
           surveyLink = courseDetail.surveyLink;

        }
        else if(where.course !=null && where.user!=null){
          console.log("user course exist", "195");
          const userDetail = await strapi.entityService.findOne(
            "plugin::users-permissions.user",
            where.user,
            {
              select: ["email","id"],
            }
          );

          emailId  = userDetail.email;

          userId = userDetail.id

          // finding related course
          const courseDetail = await strapi.entityService.findOne(
            "api::course.course",
            where.course,
            {
              select: ["title","id","surveyLink"],
            }
          );

           courseTitle   = courseDetail.title;
           courseId =courseDetail.id;
           surveyLink = courseDetail.surveyLink;

        }

        else{
          const userCourseDetail = await strapi.entityService.findOne(
            "api::user-course.user-course",
            where.id,
            {
              populate: ["user","course"],
            }
          );

         if(userCourseDetail.course !=null  && userCourseDetail.course !=null ){
           userId = userCourseDetail.user.id;
           courseId= userCourseDetail.course.id;
           emailId =userCourseDetail.user.email;
           courseTitle =userCourseDetail.course.title;
           surveyLink = userCourseDetail.course.surveyLink;
         }

        }
                  if(surveyLink!=null)
                  {
                    surveyLinkDetail = `<div style='white-space: pre-line;'><p>We would love to know how we did! Please complete the survey by clicking on the link below. Your responses enable us to improve our product experience and compliance.</p>
                    <p><a style=' background-color: blue; color:white;' class="survey-link" href='${surveyLink}'>${surveyLink}</a></p></div>`;
                  }

                 // sending email: --
                 if (certTempData && certTempData[0]?.template?.url != null) {
                  let subject = certTempData[0].subject;
                  let certHtmlUrl = `public${certTempData[0]?.template?.url}`;
                  let certHtml;

                  fs.readFile(certHtmlUrl, "utf8", function (err, html) {
                    if (err) {
                     console.log("err in template reading==>",err );
                    } else {
                      // checking template is valid or not

                      let check = isValidEmailTemplate(html);

                      if (check) {
                        certHtml = html
                          .replace("{{title}}", "<%= title %>")
                          .replace("{{surveyLinkDetail}}", "<%= surveyLinkDetail %>")
                          .replace("{{dashboardLink}}", "<%= DashboardLink %>");
                        sendEmailWithTemplate(certHtml, subject, courseTitle, emailId, cc, surveyLinkDetail);
                      } else {
                        sendEmailWithTemplate(
                          defaultHtml,
                          "Certificate Granted – CPE Warehouse",
                          title,
                          emailId,
                          cc,
                          surveyLinkDetail
                        );
                      }
                    }
                  });
                } else {
                  console.log("emailId",emailId);
                  sendEmailWithTemplate(
                    defaultHtml,
                    "Certificate Granted – CPE Warehouse",
                    courseTitle,
                    emailId,
                    cc,
                    surveyLinkDetail
                  );
                }

       // UPDATING CERTIFICATE STATUS IN PURCHASED COURSE TABLE

       const purchasedCourse = await strapi.db
       .query("api::purchased-course.purchased-course")
       .update({
        data:{
        certificateStatus: 'Granted'
        },
         where: {
           $and: [
             {
               user:userId,
             },
             {
               course:courseId,
             },
           ],
         },
       });



      } else {
        console.log("<==in else==>", "not in use");
      }
    } catch (error) {
     console.log("Error in afterUpdate userCourse Lifecycle==>",error);
    }
    console.log("LIFECYCLE>UserCourse>afterUpdate finished");
  },
};

async function checkWebinarExist(course) {
  //if webinar not exist then it will create webinar
  if (!course.webinarId) {
    try {
      course.startDate = moment(course.startDate)
        .utc(true)
        .format("YYYY-MM-DDTHH:mm:ss");
      course.endDate = moment(course.endDate)
        .utc(true)
        .format("YYYY-MM-DDTHH:mm:ss");
      if (
        moment(currentDate).isSameOrBefore(
          moment(course.endDate).format("YYYY-MM-DD HH:mm:ss")
        ) &&
        moment(course.startDate).isSameOrBefore(
          moment(course.endDate).format("YYYY-MM-DD HH:mm:ss")
        )
      ) {
        const webinar = await strapi
          .service("api::user-course.user-course")
          .createWebinar(course);
        if (webinar.id) {
          await strapi.db.query("api::course.course").update({
            where: {
              id: course.id,
            },
            data: {
              webinarId: webinar.id,
            },
          });
          return webinar;
        } else {
          throw new ValidationError("error while creating Webinar");
        }
      }
    } catch (error) {
      console.log(error);
      throw new ValidationError("error while creating Webinar");
    }
  } else {
    return true;
  }
}

async function checkUserCourseExist(user, course) {
  //check user already have the course or not
  const courseExist = await strapi.db
    .query("api::user-course.user-course")
    .findOne({
      where: {
        $and: [
          {
            user: user.id,
          },
          {
            course: course.id,
          },
        ],
      },
    });

  if (courseExist) {
    throw new ValidationError("User Already have this course");
  } else {
    return true;
  }
}

function sendEmailWithTemplate(certHtml, subject, title, email, cc, surveyLinkDetail) {
  console.log("Certificate Issues Mail Sending....");
  let DashboardLink = `${CLIENT_URL}/learner/dashboard`;

  const emailTemplate = {
    subject: subject,
    text: "text",
    html: certHtml,
  };
  const emailRes = strapi.plugins["email"].services.email.sendTemplatedEmail(
    {
      to: email,
      replyTo: EMAIL_REPLY_TO,
      from: EMAIL_FROM,
      cc: cc,
      //bcc:BCC_EMAIL || 'cpewarehouses@gmail.com',

      // from: is not specified, so it's the defaultFrom that will be used instead
    },
    emailTemplate,
    {
      title,
      surveyLinkDetail,
      DashboardLink,
    }
  );
  console.log("Certificate Issues Mail Sent.");
}

// CHEKING  GIVEN TEMPLATE IS VALID OR NOT
function isValidEmailTemplate(html) {
  let isValid = true;
  let keyword = ["{{title}}", "{{surveyLinkDetail}}", "{{dashboardLink}}"];

  for (let i = 1; i < keyword.length; i++) {
    let result = html.includes(keyword[i]);

    if (!result) {
      isValid = false;
      break;
    }
  }

  return isValid;
}
