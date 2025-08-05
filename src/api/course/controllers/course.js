"use strict";
/**
 *  course controller
 */

const { createCoreController } = require("@strapi/strapi").factories;
const excelJS = require("exceljs");
module.exports = createCoreController("api::course.course", ({ strapi }) => ({
  async getExcelData(ctx) {
    const { id } = ctx.params;
    console.log("id",id);
    // find the user course data
    const courseUserData = await strapi.db
      .query("api::user-course.user-course")
      .findMany({
        // populate: ["user", "course"],
        where:{

          course:{id:{ $eq: id}},
        },
        populate: {
          
          user: true,
          course:{populate:{
            instructors:true,
            category:true,
          }}
        },
      });
 console.log("courseuserDAta",courseUserData);
    // create the workbook
    const workbook = new excelJS.Workbook();
    const worksheet = workbook.addWorksheet("My_Users");

    // create excel file columns for the workbook
    worksheet.columns = [
      { header: "First Name", key: "fname", width: 30 },
      { header: "Last Name", key: "lname", width: 30 },
      { header: "User Course Id", key: "userCourseId", width: 20 },
      { header: "Course Id", key: "courseId", width: 20 },
      { header: "Course Title", key: "courseTitle", width: 20 },
      { header: "PTIN", key: "ptin", width: 30 },
      { header: "Course Hours", key: "course_hours", width: 20 },
      { header: "Completed On", key: "completed_on", width: 20 },
      { header: "Program Number", key: "program_number", width: 30 },
      { header: "Faculty", key: "faculty", width: 35 },
      { header: "Category", key: "category", width: 20 },
    ];
    courseUserData.forEach((courseUser) => {

     console.log("courseUser",courseUser);
    
      
       if(courseUser.user !=null && courseUser.course !=null){
        let userData = {
          completed_on: courseUser.completedOn || 'NA',
          userCourseId : courseUser.id || 'NA',
         
        };
      
        let name = [];
        let instructorName ;

        
        if(courseUser?.course?.instructors.length>1){
          courseUser?.course?.instructors.forEach((element) => {
        let instructname= element?.firstName + " " + element?.lastName
         name.push(instructname)
          });
          instructorName=name.join(',')
        }
        else if(courseUser.course.instructors.length==0){
          instructorName =''
        }
        else{
          instructorName=courseUser.course.instructors[0]?.firstName + " " + courseUser.course.instructors[0]?.lastName
        }
  
            userData.faculty = instructorName || 'NA';
            userData.fname= courseUser.user.firstName || 'NA';
            userData.lname= courseUser.user.lastName || 'NA';
            userData.ptin= courseUser.user.PTIN || 'NA';
            userData.program_number= courseUser?.course?.programNumber || 'NA';
            userData.course_hours =  (courseUser?.course?.duration + " " + courseUser?.course?.durationUnit) || 'NA';
            userData.category =  courseUser?.course?.category.title || 'NA'
            userData.courseId =  courseUser?.course?.id || 'NA'
            userData.courseTitle = courseUser?.course?.title || 'NA'

         
            // Add row in excel file
            worksheet.addRow(userData);
            worksheet.getRow(1).eachCell((cell) => {
              cell.font = { bold: true, color: { argb: "000000" }, size: 16 };
            });

       }

      
    }    
    );
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
