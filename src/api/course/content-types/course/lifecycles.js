const { ValidationError } = require("@strapi/utils").errors;
const moment = require("moment")
const currentDate = moment().format('YYYY-MM-DD HH:mm:ss')
module.exports = {
  // Create webinar after create new course from admin
  async beforeCreate(event) {
    try {
      const { data } = event.params;
      if(data.startDate != data.endDate){
        //format start date and end date
        data.startDate = moment(data.startDate).utc(true).format('YYYY-MM-DDTHH:mm:ss')
        data.endDate = moment(data.endDate).utc(true).format('YYYY-MM-DDTHH:mm:ss')
     
        let dataWebinar = {
          title: data.title,
          shortDesc: data.shortDesc,
          startDate: data.startDate,
          endDate: data.endDate,
          duration: data.duration,
          zoomAccount:data.zoomAccount
        };
        //if course does not have webinar id
        if (!data.webinarId) {
          //check course has category of recorded
          if (
            (data.webinarId === undefined || data.webinarId == null) &&
            data.category != 3 &&
            data.category != null
          ) {
            //check end date is before current date and end date is before start date or not
            if (moment(currentDate).isSameOrBefore(moment(data.endDate).format('YYYY-MM-DD HH:mm:ss')) && moment(data.startDate).isSameOrBefore(moment(data.endDate).format('YYYY-MM-DD HH:mm:ss'))) {
              //Create Webinar
              let webinarData = await strapi
                .service("api::user-course.user-course")
                .createWebinar(dataWebinar);
              if (webinarData.id) {
                try {
                  //attach webinarId to data
                  data.webinarId = webinarData.id;
                } catch (error) { }
              }
            }
         }
       }
      }else{
        throw new ValidationError('Start date And End date same')
      }
      if(data.category ==3){
        let currDate = new Date()
        currDate.setDate(currDate.getDate() - 1);
        data.startDate = currDate;
        data.endDate = currDate;
      }
      return true;
    } catch (error) {
      console.log(error);
      throw new ValidationError('Start date And End date same')
    }
  },

  // Update webinar after update course from admin
  async beforeUpdate(event) {

    try {
      const { data, where } = event.params;
      if (!data.publishedAt) {
        console.log("++++++++++++++++++++++++++");

        const previousData = await strapi.db
          .query("api::course.course")
          .findOne({ where });

        //check title,shortDesc,startDate,endDate is changed or not
        if (data.webinarId) {
          if (
            //check title short desc start date or end date is updated or not
            (previousData.title !== data.title ||
              previousData.shortDesc !== data.shortDesc ||
              previousData.startDate !== data.startDate ||
              previousData.endDate !== data.endDate ||
              previousData.duration !== data.duration)
            &&
            data.category != 3 && // recorded  courses to be excluded
            data.category != null
          ) {
            let courseData = {
              id: data.id,
              title: data.title,
              shortDesc: data.shortDesc,
              startDate: data.startDate,
              endDate: data.endDate,
              webinarId: data.webinarId,
              duration: data.duration,
              zoomAccount:data.zoomAccount
            };
            // UPDATE WEBINAR
            //check end date is before current date and end date is before start date or not
            if (moment(currentDate).isSameOrBefore(moment(data.endDate).format('YYYY-MM-DD HH:mm:ss')) && moment(data.startDate).isSameOrBefore(moment(data.endDate).format('YYYY-MM-DD HH:mm:ss'))) {
              const updateData = await strapi
                .service("api::user-course.user-course")
                .updateWebinar(courseData);
            }
            else {
              await strapi.service("api::user-course.user-course").deleteWebinar(data.webinarId, data.zoomAccount)
              data.webinarId = '';
            }
          }
        } else{
          //format start date and end date
          if(data.startDate && data.endDate){
          data.startDate = moment(data.startDate).utc(true).format('YYYY-MM-DDTHH:mm:ss')
          data.endDate = moment(data.endDate).utc(true).format('YYYY-MM-DDTHH:mm:ss')

          let dataWebinar = {
            title: data.title,
            shortDesc: data.shortDesc,
            startDate: data.startDate,
            endDate: data.endDate,
            duration: data.duration,
            zoomAccount:data.zoomAccount
          };
          //check course is of recorded category or not
          if (
            (data.webinarId === undefined || data.webinarId == null) &&
            data.category != 3 &&
            data.category != null
          ) {
            //Create Webinar
            //check end date is before current date and end date is before start date or not
            if (moment(currentDate).isSameOrBefore(moment(data.endDate).format('YYYY-MM-DD HH:mm:ss')) && moment(data.startDate).isSameOrBefore(moment(data.endDate).format('YYYY-MM-DD HH:mm:ss'))) {
              //if course does not have webinarId then create webinar and store
              let webinarData = await strapi
                .service("api::user-course.user-course")
                .createWebinar(dataWebinar);
              if (webinarData.id) {
                try {
                  //attach webinarId to data
                  data.webinarId = webinarData.id;
                } catch (error) { }
              }
            }
          }
        }
        }
      }
      return true;
    } catch (error) {
      console.log(error);
    }
  },

};
