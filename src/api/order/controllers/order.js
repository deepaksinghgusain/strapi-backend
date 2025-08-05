'use strict';



/**
 *  order controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::order.order',({ strapi }) =>  ({

async findOne(ctx){
// console.log("ctx",ctx.params);
const {id}=ctx.params
  if(!id){
           ctx.badRequest('kindly provide valid user id')
  }else{
    const entry = await strapi.db.query('api::order.order').findMany({
        where: { userId:id },
        populate:{OrderItems:true}
      })
        if(!entry){
 
      ctx.badRequest(
        {
            msg:'error occured',
            error:entry
        }
      )

        }else{
                if(entry.length==0){
                    ctx.send({
                        "msg":'order does not exist',
                        status:200,
                        data:entry
                    })
                }
                else{
                    ctx.send({
                        status:200,
                        data:entry
                    })
                }
              
        }

           
  }



},

async orderById(ctx) {
  try {
    const {id}=ctx.params
    if(!id){
             ctx.badRequest('provid order id ')
    }else{
      const entry = await strapi.db.query('api::order.order').findMany({
          where: { id:id },
          populate:{OrderItems:true}
        })
          if(!entry){
   
        ctx.badRequest(
          {
              msg:'error occured',
              error:entry
          }
        )
  
          }else{
                  if(entry.length==0){
                      ctx.send({
                          "msg":'order does not exist',
                          status:200,
                          data:entry
                      })
                  }
                  else{
                      ctx.send({
                          status:200,
                          data:entry
                      })
                  }
                
          }
  
             
    }
  
  
  } catch (err) {
    ctx.body = err;
  }
},

}));
