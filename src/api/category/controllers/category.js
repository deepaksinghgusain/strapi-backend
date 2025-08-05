'use strict';

/**
 *  category controller
 */

const { createCoreController } = require('@strapi/strapi').factories;
const excelJS = require("exceljs");
// const moment  = require("moment")
const moment = require('moment-timezone');
module.exports = createCoreController('api::category.category',({ strapi }) => ({
    async getExcelData(ctx) {
     
      const { id } = ctx.params;
      let timezone = ctx.request.header.timezone 
      console.log("ctx",timezone);
      let category ;
      if(id==2){
        category = 'Live'
      }else if(id==3){
         category ='Recorded'
      }else{
       category = 'InPerson'
      }


     function timeZoneConverter(time){

        moment.suppressDeprecationWarnings = true;
         var time =moment(`${time}`)
      
        
        
       // const timezone = moment.tz.guess();
        //  console.log("timezone",timezone);
       let t = time.tz(`${timezone}`).format('')
      //  console.log("t",t);
        return t;
        
      // moment(result.courseStartDate).format('L')


      }

      // find the user course data
      const purchasedCourseData = await strapi.db
        .query("api::purchased-course.purchased-course")
        .findMany({
          where: {
      
        category:id
            
          },
          select:['userEmail','title','purchaseDate','purchaseTime',
          'amount','amountDiscounted','amountNet','certificateStatus',
          'courseStartDate','courseEndDate','courseSessionDuration',
          'programNumber','faculty','discountCode'],
          populate:['user','course','package','order']
          
        });
      //  console.log("purchasedDetails",purchasedCourseData);
      // create the workbook
      const workbook = new excelJS.Workbook();
      const worksheet = workbook.addWorksheet("My_Users");
  
      // create excel file columns for the workbook
      worksheet.columns = [
        // { header: "First Name", key: "fname", width: 50 },
        // { header: "Last Name", key: "lname", width: 50 },
        // { header: "PTIN", key: "ptin", width: 20 },
        // { header: "Course Hours", key: "course_hours", width: 20 },
        // { header: "Completed On", key: "completed_on", width: 20 },
        // { header: "Program Number", key: "program_number", width: 20 },
        { header: "Purchased Item Id", key: "pcId", width: 25 },
        { header: "User Id", key: "userId", width: 20 },
        { header: "User Email", key: "userEmail", width: 40 },
        { header: "Course Id", key: "courseId", width: 20 },
        { header: "Package Id", key: "packageId", width: 20 },
        { header: "title", key: "title", width: 50 },
        { header: "Faculty", key: "faculty", width: 40 },
        { header: "Purchase Date", key: "purchaseDate", width: 30 },
        { header: "Purchase Time", key: "purchaseTime", width: 30 },
        { header: "Amount", key: "amount", width: 20 },
        { header: "Amount Discounted", key: "amountDiscounted", width: 20 },
        { header: "Amount Net", key: "amountNet", width: 20 },
        { header: "Type (Live/Recorded)", key: "type", width: 40 },
        { header: "Certificate Status (Granted/Not Granted)", key: "certificateStatus", width: 55 },
        { header: "Course Start Date", key: "courseStartDate", width: 30 },
        { header: "Course End Date", key: "courseEndDate", width: 30 },
        { header: "Course Session Duration", key: "courseSessionDuration", width: 40 },
        { header: "IRS Program Number", key: "programNumber", width: 30 },
        { header: "Coupon Code", key:'couponCode', width:30}


      ];
     
   

      purchasedCourseData.forEach(async(result) => {
  
        // console.log("result",result);
        // let user = {
        //   fname: courseUser.user.firstName,
        //   lname: courseUser.user.lastName,
        //   ptin: courseUser.user.PTIN,
        //   course_hours:
        //     courseUser.course.duration + " " + courseUser.course.durationUnit,
        //   completed_on: courseUser.completedOn,
        //   program_number: courseUser.course.programNumber,
        // };
        let createdAt=timeZoneConverter(result?.purchaseDate)
        let courseStartDate= result?.courseStartDate!=null? timeZoneConverter(result?.courseStartDate):null
        let courseEndDate= result?.courseEndDate!=null? timeZoneConverter(result?.courseEndDate):null
        
       
     
        let user ={
          pcId:result.id,
          userId:result.user.id,
          userEmail:result.userEmail,
          courseId:result?.course?.id || 'NA',
          packageId:result?.package?.id || 'NA',
          title:result.title || 'NA',
          purchaseDate: moment.tz(createdAt,timezone).format('L') || 'NA',
          purchaseTime:  moment.tz(createdAt,timezone).format('LTS') || 'NA',
          amount:"$"+ ((Math.round(result.amount* 100) / 100).toFixed(2) || 0),
         // amount:"$"+result.amount,
           amountDiscounted:"$"+ ((Math.round(result.amountDiscounted* 100) / 100).toFixed(2) || 0),
          //amountDiscounted:"$"+ result.amountDiscounted,
           amountNet:"$"+ ((Math.round(result.amountNet* 100) / 100).toFixed(2) || 0) ,
          //amountNet:"$"+ result.amountNet || 0,
          type:category,
          certificateStatus:result.certificateStatus,
          courseStartDate:courseStartDate!=null?((moment(courseStartDate).format('L') + "  "+ moment(courseStartDate).format('LTS'))|| 'NA'):'NA',
          courseEndDate: courseEndDate!=null?((moment(courseEndDate).format('L') + "  "+ moment(courseEndDate).format('LTS') )|| 'NA'):'NA',
          courseSessionDuration:result.courseSessionDuration || 'NA',
          programNumber:result.programNumber || 'NA',
          faculty:result.faculty || 'NA',
          couponCode:result.discountCode || 'NA'

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
    },
  }));
