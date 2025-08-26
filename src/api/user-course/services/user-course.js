"use strict";

/**
 * user-course service.
 */
const JSONBigInt = require('json-bigint')({ 'storeAsString': true })
const { convert } = require('html-to-text');
const { createCoreService } = require("@strapi/strapi").factories;
let axios = require("axios").default;
require("dotenv").config();
const moment = require("moment")
module.exports = createCoreService(
  "api::user-course.user-course",
  ({ strapi }) => ({
    //Generate Access Token with Username and password
    generateAccessToken: async (zoomAccount) => {
      
      console.log("Selected Zoom Account:", zoomAccount);
    
      // Fetch global GTM data
      const gData = await strapi.db.query("api::global.global").findOne({
        where: { id: 1 },
        select: ["gtmPassword"],
      });
    
      const gtmPassword = gData.gtmPassword || null;
    
      // Determine Zoom credentials based on the zoomAccount value
      // const zoomCredentials = {
      //   clientId: zoomAccount === "zoom_account_1" ? process.env.ZOOM_CLIENT_ID_1 : process.env.ZOOM_CLIENT_ID_2,
      //   clientSecret: zoomAccount === "zoom_account_1" ? process.env.ZOOM_CLIENT_SECRET_1 : process.env.ZOOM_CLIENT_SECRET_2,
      //   accountId: zoomAccount === "zoom_account_1" ? process.env.ZOOM_ACCOUNT_ID_1 : process.env.ZOOM_ACCOUNT_ID_2,
      // };

      const zoomCredentials = {
        clientId:  process.env.ZOOM_CLIENT_ID,
        clientSecret: process.env.ZOOM_CLIENT_SECRET,
        accountId: process.env.ZOOM_ACCOUNT_ID,
      };
    
      console.log("Using Zoom Credentials:", zoomCredentials);

      console.log(`Basic ${Buffer.from(`${zoomCredentials.clientId}:${zoomCredentials.clientSecret}`).toString('base64')}`);
      
    
      // Configure request options for token generation
      const config = {
        method: "post",
        url: `https://zoom.us/oauth/token?grant_type=account_credentials&account_id=${zoomCredentials.accountId}`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${Buffer.from(`${zoomCredentials.clientId}:${zoomCredentials.clientSecret}`).toString('base64')}`,
        },
      };
    
      try {
        const response = await axios(config);
        console.log("Access Token Generated:", response.data.access_token);
        return response.data.access_token;
      } catch (error) {
        console.error("Error in generateAccessToken for account", zoomAccount, error.message);
        throw error; // Re-throw error for higher-level handling if necessary
      }
    },
    
    // Helper function to format date for Zoom API
    formatDateToZoom: (date) => {
      return moment(date).tz("America/New_York").format("YYYY-MM-DDTHH:mm:ss");
    },

    // Helper function to calculate the duration between two dates in minutes
    calculateDurationInMinutes: (startDate, endDate) => {
      let start = moment(startDate);
      let end = moment(endDate);
      return end.diff(start, 'minutes');
    },
    // For Create Webinar
    createWebinar: async (ctx) => {
      return new Promise(async (resolve, reject) => {
        try {
          // Logging ctx.startDate and ctx.endDate before conversion
          console.log("Raw ctx.startDate: ", ctx.startDate, " Raw ctx.endDate: ", ctx.endDate, "   Raw ctx.zoomAccount  : ",ctx.zoomAccount);
          let shortDescText = ctx.title;
          if (ctx.shortDesc) {
            shortDescText = convert(ctx.shortDesc, { wordwrap: 130 })
          }
        
          let currentDate = moment(); // Current date and time as a moment object

          // Parse and convert start date and end date to ET timezone
          let startDateET = moment(ctx.startDate).tz("America/New_York");
          let endDateET = moment(ctx.endDate).tz("America/New_York");

          // Logging the converted startDate and endDate for debugging
          console.log("Converted Start Date (ET): ", startDateET.format());
          console.log("Converted End Date (ET): ", endDateET.format());
          if (
            currentDate.isSameOrBefore(endDateET) &&  // Check if current date is before or equal to endDate
            startDateET.isSameOrBefore(endDateET)       // Check if startDate is before or equal to endDate
          ){
            const accessToken = await strapi
              .service("api::user-course.user-course")
              .generateAccessToken(ctx.zoomAccount);
            // calculate diffence in minutes between start date and end date times
            let diffInMinutes = strapi.service("api::user-course.user-course").calculateDurationInMinutes(startDateET, endDateET);
            console.log(" startDateET : ",startDateET," endDateET : ",endDateET, " diffInMinutes : ",diffInMinutes);
            let options = {
              method: "POST",
              url: `https://api.zoom.us/v2/users/me/webinars`,
              headers: {
                Authorization: "Bearer " + accessToken,
                "content-type": "application/json",
              },
              data: {
                agenda : shortDescText,
                start_time: startDateET.format("YYYY-MM-DDTHH:mm:ss"), // Send formatted start date in ET
                timezone: "America/New_York", // Specify ET timezone
                topic : ctx.title,
                type : 5,
                duration : diffInMinutes,
                settings: {
                  approval_type: 0,
                  attendees_and_panelists_reminder_email_notification: {
                    enable: true,
                    type: 0
                  },
                  follow_up_attendees_email_notification: {
                    enable: true,
                    type: 0
                  },
                  registrants_email_notification: true,
                }
              }
            };

            const response = await axios
              .request(options)
              .then(function (response) {
                resolve(response.data);
                console.log("webinar created", response.data);
              })
              .catch(function (error) {
                console.error(error);
                reject(error);
              });
          } else {
            reject(false);
          }
        } catch (error) {
          console.log("::::in create webinar:::::", error);
        }
      });
    },

    // For Create Registraint
    createRegistraint: async (courseId, userData) => {

      return new Promise(async (resolve, reject) => {
        try {
          const course = await strapi.db.query("api::course.course").findOne({
            where: {
              id: courseId,
            },
          });

          const accessToken = await strapi
            .service("api::user-course.user-course")
            .generateAccessToken(course.zoomAccount);
          
          // console.log("accessToken:::::::", accessToken);
          // const tokenData = await strapi.db.query("api::token.token").findMany();
          //let regUrl = `https://api.getgo.com/G2W/rest/v2/organizers/${process.env.OAUTH_ORGANIZER_KEY}/webinars/${course.webinarId}/registrants`;


          let options = {
            method: "POST",
            url: `https://api.zoom.us/v2/webinars/${course.webinarId}/registrants`,
            headers: {
              Accept: "application/json",
              Authorization: "Bearer " + accessToken,
              "content-type": "application/json",
            },
            data: {
              first_name : userData.firstName,
              last_name: userData.lastName,
              email: userData.email,
            }
          };

          await axios
            .request(options)
            .then(function (response) {
              console.log("-----create registerants response----   :   ", response);
              resolve(response.data);
              console.log("registrant added", response.data);
            })
            .catch(function (error) {
              console.log("registrant error", error);
              resolve(null);
              //  reject(error);
            });
        } catch (error) {
          console.log(error);
        }
      });
    },

    // For Update Webinar
    updateWebinar: async (course) => {
      console.log("==========updateWebinar call in user-course----------");
      return new Promise(async (resolve, reject) => {
        try {
          let shortDescText = course.title;
          if (course.shortDesc) {
            shortDescText = convert(course.shortDesc, { wordwrap: 130 })
          }
          const accessToken = await strapi
            .service("api::user-course.user-course")
            .generateAccessToken(course.zoomAccount);
          // Format start and end dates to Zoom format (ET time)
          // Format start and end dates to Zoom format (ET time)
          let startDateET = moment(course.startDate).tz("America/New_York"); // Start time in ET
          let endDateET = moment(course.endDate).tz("America/New_York");     // End time in ET

          // Logging the converted dates
          console.log("Update Webinar - Start Date (ET): ", startDateET.format());
          console.log("Update Webinar - End Date (ET): ", endDateET.format());

          // Calculate duration in minutes
          let diffInMinutes = strapi.service("api::user-course.user-course").calculateDurationInMinutes(startDateET, endDateET);

          let options = {
            method: "PATCH",
            url: `https://api.zoom.us/v2/webinars/${course.webinarId}`,
            params: { notifyParticipants: true },
            headers: {
              Authorization: "Bearer " + accessToken,
              "content-type": "application/json",
            },
            data: {
              agenda : shortDescText,
              start_time: startDateET.format("YYYY-MM-DDTHH:mm:ss"), // Send start time in ET
              timezone: "America/New_York", // Specify the ET timezone
              topic : course.title,
              type : 5,
              duration : diffInMinutes,
              settings: {
                approval_type: 0,
                attendees_and_panelists_reminder_email_notification: {
                  enable: true,
                  type: 0
                },
                follow_up_attendees_email_notification: {
                  enable: true,
                  type: 0
                },
                registrants_email_notification: true,
              }
            },
          };

          await axios
            .request(options)
            .then(function (response) {
              console.log("webinar updated", response.data);
              resolve(response.data);
            })
            .catch(function (error) {
              console.error(error);
              reject(error);
            });
        } catch (error) {
          // console.log("::::Error in update webinar:::::", error);
        }
      });
    },

    // For Delete Webinar
    deleteWebinar: async (webinarId, zoomAccount) => {
      return new Promise(async (resolve, reject) => {
        try {
          const accessToken = await strapi
            .service("api::user-course.user-course")
            .generateAccessToken(zoomAccount);
          let options = {
            method: "DELETE",
            url: `https://api.zoom.us/v2/webinars/${webinarId}`,
            params: {
              sendCancellationEmails: "true",
            },
            headers: {
              Authorization: "Bearer " + accessToken,
            },
          };

          await axios
            .request(options)
            .then(function (response) {
              // console.log(response.data);
              resolve(response.data);
            })
            .catch(function (error) {
              console.error(error);
              reject(error);
            });
        } catch (error) {
          console.log(error);
        }
      });
    },

    // For Delete Registrant
    deleteRegistrant: async (webinarId, registrantKey, zoomAccount) => {
      return new Promise(async (resolve, reject) => {
        try {
          const accessToken = await strapi
            .service("api::user-course.user-course")
            .generateAccessToken(zoomAccount);

          let options = {
            method: "DELETE",
            url: `https://api.zoom.us/v2/webinars/${webinarId}/registrants/${registrantKey}`,
            headers: {
              Authorization: "Bearer " + accessToken,
            },
          };

          await axios
            .request(options)
            .then(function (response) {
              resolve(response.data);
              // console.log(response.data);
            })
            .catch(function (error) {
              reject(error);
              console.error(error);
            });
        } catch (error) {
          console.log(error);
        }
      });
    },

  })
);
