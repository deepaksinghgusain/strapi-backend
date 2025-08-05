"use strict";

/**
 *  cart controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::cart.cart", ({ strapi }) => ({
  async findOne(ctx) {
    console.log("ctx.params = ", ctx.params);
    const { id } = ctx.params;
    var content;
    console.log("id = ", id);
    try {
      content = await super.findOne(ctx);
    } catch (err) {
      console.log("err === ", err);
    }

    var campaigns;
    let campaingQUery = `SELECT ccc.course_id, ccc.package_id   FROM carts c  
    LEFT JOIN carts_components cc ON cc.entity_id = c.id  
    LEFT JOIN components_cart_carts ccc ON ccc.id = cc.component_id   WHERE c.id =  ${id}`;

    campaigns = await strapi.db.connection.raw(campaingQUery).catch((err) => {
      return err.message;
    });

    
    var courseId = [];
    var packageId = [];
    if (campaigns[0].length > 0) {
      campaigns[0].map((data) => {
        if (data["course_id"] > 0) {
          courseId.push(data["course_id"]);
        } else {
          packageId.push(data["package_id"]);
        }
      });
    } else {
      return content;
    }

    courseId = [...new Set(courseId)];
    packageId = [...new Set(packageId)];
   // console.log("content ==== ", content);
    
    console.log("courseId ==== ", courseId);
    console.log("packageId ==== ", packageId);

    /*** GET DATA ACCORDING TO COURSE ***/


    // var courseQuery = `SELECT c.id, c.title, c.start_date, c.end_date,c.timezone, c.price,c.discount, f.formats, f.url,  c.venue_location,c.short_desc FROM courses c  

    //  LEFT JOIN files_related_morphs frm ON frm.related_id = c.id AND frm.related_type = 'api::course.course'
    //  LEFT JOIN files f ON f.id = frm.file_id WHERE c.id IN (${courseId})   and LOCATE( 'image',f.mime ) >=1 GROUP BY c.id, f.id`;
    


    var courseQuery = `SELECT c.id, c.title, c.start_date, c.end_date,c.timezone, c.price,c.discount, f.formats, f.url,  c.venue_location,c.short_desc,cat.title as category FROM courses c
    LEFT JOIN  courses_category_links cc ON cc.course_id = c.id
    LEFT JOIN categories cat ON cat.id =cc.category_id 
    LEFT JOIN files_related_morphs frm ON frm.related_id = c.id AND frm.related_type = 'api::course.course'
    LEFT JOIN files f ON f.id = frm.file_id WHERE c.id IN (${courseId})   and LOCATE( 'image',f.mime ) >=1 GROUP BY c.id, f.id,cat.title`;
 console.log("courseQuery ==== ", courseQuery);
    var courseRowData;
    if (courseId.length > 0) {
      
      try {
        
        courseRowData = await strapi.db.connection
          .raw(courseQuery)
          .catch((err) => {
            return err.message;
          });

       console.log("courseRowData  === ", courseRowData[0]);
       console.log("cartitems before course === ",  content.data.attributes.CartItem); 

       if (content.data.attributes.CartItem.length > 0) {
          content.data.attributes.CartItem.map((data, index) => {
               // console.log('course1  ===' ,courseRowData[0].filter(x=>x.id==data.courseId))
              //  console.log('course2 ===', courseRowData[0].filter(x=>x.id==data.courseId)[0])
              //  console.log('data ===', data)
            data['course']  =   courseRowData[0].filter(x=>x.id==data.courseId)[0];
        });
        }
      } catch (err) {
        console.log("Courseerror === ", err);
        return err;
      }
    }
     console.log("cartitems after course === ",  content.data.attributes.CartItem); 

    // var packagequery = `SELECT p.id, p.title, p.price, p.discounted_price, p.desc , f.formats, f.url,'' as 'venue_location' ,'' as 'short_desc'  FROM packages p  
    // LEFT JOIN files_related_morphs frm ON frm.related_id = p.id AND frm.related_type = 'api::package.package'  
    // LEFT JOIN files f ON f.id = frm.file_id 
    // WHERE p.id  IN ( ${packageId.toString()})  and    LOCATE( 'image',f.mime ) >=1  `



    // var packagequery = `SELECT p.id, p.title,  SUM(CASE WHEN c.discount > 0 THEN c.discount ELSE c.price  END) as includedCoursePrice, p.price, p.discounted_price, p.desc , f.formats, f.url,'' as 'venue_location' ,'' as 'short_desc' 
    // FROM packages p
    // LEFT JOIN files_related_morphs frm ON frm.related_id = p.id AND frm.related_type = 'api::package.package'
    // LEFT JOIN files f ON f.id = frm.file_id 
 
    // INNER JOIN courses_package_links cpl  ON  cpl.package_id =p.id
    // INNER JOIN courses c ON  cpl.course_id =c.id
    // WHERE p.id  IN (${packageId.toString()})  and    LOCATE( 'image',f.mime ) >=1   GROUP BY   p.id, p.title, p.price, p.discounted_price, p.desc , f.formats, f.url`;


var packagequery = `SELECT p.id, p.title,  SUM(CASE WHEN c.discount > 0 THEN c.discount ELSE c.price  END) as includedCoursePrice, p.price, p.discounted_price, p.desc , f.formats, f.url,'' as 'venue_location' ,'' as 'short_desc' ,cat.title as category 
    FROM packages p
    LEFT JOIN files_related_morphs frm ON frm.related_id = p.id AND frm.related_type = 'api::package.package'
    LEFT JOIN files f ON f.id = frm.file_id 
    LEFT JOIN  packages_category_links cc ON cc.package_id = p.id
    LEFT JOIN categories cat ON cat.id =cc.category_id 
 
    INNER JOIN packages_courses_links cpl  ON  cpl.package_id =p.id
    INNER JOIN courses c ON  cpl.course_id =c.id
    WHERE p.id  IN (${packageId.toString()})  and    LOCATE( 'image',f.mime ) >=1   GROUP BY   p.id, p.title, p.price ,cat.title, p.discounted_price, p.desc , f.formats, f.url;`
   var packagedata ;
   
   if (packageId.length > 0) {
      /*** GET DATA ACCORDING TO PACKAGE ***/
      try {

        packagedata = await strapi.db.connection
          .raw(packagequery)
          .catch((err) => {
            return err.message;
          });

          console.log("packagedata === ",packagedata, packagedata[0]);
      
        if (content.data.attributes.CartItem.length > 0) {
           content.data.attributes.CartItem.filter(data=>data.courseId===0).map((data, index) => {
            // if(data.courseId == 0 && data.packageId == courseData[0][0].id){
              console.log('course1  ===' ,packagedata[0].filter(x=>x.id==data.packageId))
              console.log('course2 ===', packagedata[0].filter(x=>x.id==data.packageId)[0])
              console.log('data ===', data)
              data["course"] =  packagedata[0].filter(x=>x.id==data.packageId)[0];
          });
        }
      } catch (err) {
        console.log("packageerr === ", err);
        return err;
      }
      console.log("cartitems after package === ",  content.data.attributes.CartItem); 

    }
    return content;
  },

  async delete(ctx) {
    const { id } = ctx.params;
    try {
      await strapi.db.connection.transaction(async (transacting) => {
        await transacting.context.raw(
          "delete from components_cart_carts where id = " + id
        );
        await transacting.context.raw(
          "delete from carts_components where component_id = " + id
        );
      });
    } catch (err) {
      console.log("err === ", err);
      return err;
    }
    return "ok";
  },
}));
