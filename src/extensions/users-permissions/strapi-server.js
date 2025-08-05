module.exports = (plugin) => {
  /* EDIT PROFILE FOR LOGED IN USER */
  const axios = require("axios");
  const excelJS = require("exceljs");
  const moment = require('moment-timezone');
  plugin.controllers.user.editProfile = async (ctx) => {
    userInfo = ctx.state.user;

    if (!userInfo) {
      return {
        msg: "token is expired or invalid",
      };
    } else {
      const { id } = userInfo;
      const userData = ctx.request.body;
      const imageFiles = ctx.request.files;

      if (imageFiles === null || imageFiles === undefined) {
        const entity = await strapi.entityService.update(
          "plugin::users-permissions.user",
          id,
          {
            fields: [
              "email",
              "username",
              "firstName",
              "lastName",
              "phone",
              "confirmed",
              "blocked",
              "address1",
              "address2",
              "PTIN",
              "companyName",
              "country",
              "state",
              "createdAt",
              "updatedAt",
            ],
            // fields:['username','email','firstName','lastName','address1','address2','phone','PTIN','companyName','country','state'],
            data: userData,
          }
        );

        if (entity) {
          return {
            msg: " profile updated successfully",
            status: 200,
            data: entity,
          };
        } else {
          return {
            msg: "error occurred during profile updation",
            status: 400,
            data: [],
          };
        }
      } else {
        const userProfile = await strapi.entityService.findOne(
          "plugin::users-permissions.user",
          id,
          { populate: ["profileImage"] }
        );

        if (userProfile?.profileImage) {
          // updating the image if image already exist

          await strapi.entityService.update(
            "plugin::users-permissions.user",
            id,
            {
              fields: [
                "email",
                "username",
                "firstName",
                "lastName",
                "phone",
                "confirmed",
                "blocked",
                "address1",
                "address2",
                "PTIN",
                "companyName",
                "country",
                "state",
                "createdAt",
                "updatedAt",
              ],
              data: userData,

              files: {
                profileImage: imageFiles.profileImage,
              },
              populate: { profileImage: true },
            }
          );

          // delete the previous image
          const imageId = userProfile?.profileImage.id;
          const imageEntry = await strapi.db
            .query("plugin::upload.file")
            .delete({ where: { id: imageId } });
          await strapi.plugins.upload.services.upload.remove(imageEntry);

          // fetching the previous image Data

          const entity = await strapi.entityService.findOne(
            "plugin::users-permissions.user",
            id,
            {
              fields: [
                "email",
                "username",
                "firstName",
                "lastName",
                "phone",
                "confirmed",
                "blocked",
                "address1",
                "address2",
                "PTIN",
                "companyName",
                "country",
                "state",
                "createdAt",
                "updatedAt",
              ],
              populate: ["profileImage"],
            }
          );
          if (entity) {
            return {
              msg: " profile updated successfully",
              status: 200,
              data: entity,
            };
          } else {
            return {
              msg: "error occured during profile updation",
              status: 400,
              data: [],
            };
          }
        } else {
          const entity = await strapi.entityService.update(
            "plugin::users-permissions.user",
            id,
            {
              data: userData,

              files: {
                profileImage: imageFiles.profileImage,
              },
              populate: { profileImage: true },
            }
          );
          if (entity) {
            return {
              msg: " profile updated successfully",
              status: 200,
              data: entity,
            };
          } else {
            return {
              msg: "error occured during profile updation",
              status: 400,
              data: [],
            };
          }
        }
      }
    }
  };

  /* CHANGE PASSWORD FOR LOGED IN USER */

  plugin.controllers.user.changePassword = async (ctx) => {
    const { password, confirmPassword } = await ctx.request.body;
    var currentPassword = await ctx.request.body.currentPassword;
    const user = await ctx.state.user;
    userPassword = await user.password.toString();
    currentPassword = currentPassword.toString();

    if (!user) {
      return ctx.badRequest("User does not exist");
    }
    const id = user.id;

    if (confirmPassword !== password) {
      return ctx.badRequest("password and confirm password did not match");
    }
    const validPassword = await strapi.plugins[
      "users-permissions"
    ].services.user.validatePassword(currentPassword, userPassword);

    if (!validPassword) {
      return ctx.badRequest("current password is wrong");
    }

    const entity = await strapi.entityService.update(
      "plugin::users-permissions.user",
      id,
      {
        fields: ["email", "username", "firstName", "createdAt", "updatedAt"],
        data: { password: password },
      }
    );

    return ctx.send({
      msg: "password updated successfully",
      data: entity,
    });
  };

  // CUSTOMIZING FORGOT PASSWORD  TO CHECK USER IS EXIST OR NOT ;
  plugin.controllers.user.customForgotPassword = async (ctx) => {
    const { URL } = process.env;
    if (!URL) {
      return ctx.badRequest("forgot password end point does not exist");
    }
    const endPoint = `${URL}/api/auth/forgot-password`;

    const { email } = await ctx.request.body;

    if (!email) {
      return ctx.badRequest("Enter Your Email");
    }

    const entity = await strapi.entityService.findMany(
      "plugin::users-permissions.user",

      {
        filters: {
          email: {
            $eq: email,
          },
        },
        fields: [
          "email",
          "username",
          "confirmed",
          "blocked",
          "createdAt",
          "updatedAt",
        ],
      }
    );

    if (!entity || entity.length == 0) {
      return ctx.badRequest("User Does Not Exist - Please Create Account");
    }

    // caling forgot password api
    let forgotResponse;
    try {
      forgotResponse = await axios.post(endPoint, { email: email });
    } catch (error) {
      return ctx.badRequest("error in axios api call", error);
    }

    // if(!forgotResponse){
    //   return ctx.badRequest('error in axios api call',error)
    // }

    return ctx.send({
      msg: "reset link sent successfully",
      data: forgotResponse.data,
      status: 200,
    });
  };

  plugin.controllers.user.exportUsers = async (ctx) => {

   

      const userData = await strapi.db.query('plugin::users-permissions.user').findMany(
  
        {
          fields: [
            "email",
            "username",
            "confirmed",
            "blocked",
            "firstName",
            "lastName",
            "middleName",
            "phone",
            "country",
            "state",
            
            "address1",
            "address2",
            "ptin",
            "createdAt",
            "updatedAt",

          ],
          populate: ["profileImage","role"],
        }
      );
   
// console.log("userData",userData,typeof(userData));
function timeZoneConverter(time){
        
  var time =moment(`${time}`);

  const timezone = moment.tz.guess();
  // console.log("timezone",timezone);
 let t = time.tz(`${timezone}`).format('')
//  console.log("t",t);
  return t;
  
// moment(result.courseStartDate).format('L')


}
      
      // create the workbook
      const workbook = new excelJS.Workbook();
      const worksheet = workbook.addWorksheet("My_Users");
  
      // create excel file columns for the workbook
      worksheet.columns = [
      
        { header: "User Name", key: "userName", width: 30 },
        { header: "Email", key: "email", width: 20 },
        { header: "First Name", key: "firstName", width: 30 },
        { header: "Middle Name", key: "middleName", width: 20 },
        { header: "Last Name", key: "lastName", width: 30 },
        { header: "Address1", key: "adress1", width: 30 },
        { header: "Address2", key: "adress2", width: 30 },
        { header: "PTIN", key: "PTIN", width: 30 },
        { header: "Phone", key: "phone", width: 35 },
        { header: "Blocked", key: "isBlocked", width: 15 },
        { header: "Confirmed", key: "isConfirmed", width: 15 },
        { header: "Country", key: "country", width: 20 },
        { header: "State", key: "state", width: 20 },
        { header: "Role", key: "role", width: 20 },
        { header: "Created At", key: "createdAt", width: 35 },

        


      ];
      if(userData.length>0)
      userData.forEach((result) => {
    
      // console.log("result",result);
      let createdAt=timeZoneConverter(result?.order?.createdAt)
         
        let user ={
          userName:result.username || 'NA',
          email:result.email || 'NA',
          firstName:result.firstName || 'NA',
          middleName:result?.middleName || 'NA',
          lastName:result?.lastName || 'NA',
          adress1:result.adress1 || 'NA',
          adress2: result.address2 ||  'NA',
          PTIN: result.PTIN || 'NA',
          phone:result.phone || 'NA',
          isBlocked:  (result.blocked == false? 'FALSE' :'TRUE') || 'NA',
          isConfirmed: (result.confirmed == false? 'FALSE' :'TRUE') || 'NA',
          country:result.country|| 'NA',
          state:result.state || 'NA',
          role:result.role.name || 'NA',
          createdAt:(moment(createdAt).format('L') + "  "+ moment(createdAt).format('LTS'))|| 'NA'
       
        }
 
          
          
        // Add row in excel file
        worksheet.addRow(user);
        worksheet.getRow(1).eachCell((cell) => {
          cell.font = { bold: true, color: { argb: "000000" }, size: 16 };
        });
      });
      try {
        // write buffer to file
        const buffer = await workbook.xlsx.writeBuffer();
        ctx.response.set("content-type", "application/json");
        ctx.body = buffer;
      } catch (error) {
        console.log(error, "==========error=========");
      }

   
 

  };
  /* CUSTOMIZING ME ROUTE TO POPULATE IMAGE  */

  plugin.controllers.user.me = async (ctx) => {
    user = ctx.state.user;
    if (!user) {
      return ctx.badRequest("user not exist");
    }

    id = user.id;

    const entity = await strapi.entityService.findOne(
      "plugin::users-permissions.user",
      id,
      {
        fields: [
          "email",
          "username",
          "firstName",
          "lastName",
          "phone",
          "confirmed",
          "blocked",
          "address1",
          "address2",
          "PTIN",
          "companyName",
          "country",
          "state",
          "createdAt",
          "updatedAt",
        ],
        populate: ["profileImage"],
      }
    );

    return ctx.send(entity);
  };

  
  plugin.routes["content-api"].routes.push(
    {
      method: "PUT",
      path: "/profile",
      handler: "user.editProfile",
      config: {
        prefix: "",
      },
    },
    {
      method: "PUT",
      path: "/change-password",
      handler: "user.changePassword",
      config: {
        prefix: "",
      },
    },
    {
      method: "GET",
      path: "/me",
      handler: "user.me",
    },
    {
      method: "GET",
      path: "/exportUsers",
      handler: "user.exportUsers",
      config: {
        auth: false,
        policies: [
            'global::is-admin',
        ],
    }
    },
    {
      method: "POST",
      path: "/custom-forgot-password",
      handler: "user.customForgotPassword",
    }
  );

  return plugin;
};
