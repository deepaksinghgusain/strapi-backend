'use strict';

/**
 *  discount-coupon controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::discount-coupon.discount-coupon',
({ strapi }) => ({
    async validateCoupon(ctx) {
        
        let couponName = ctx.params.couponName;
        console.log(couponName);
        try {
            if(couponName==='' || couponName===null ){
             return ctx.badRequest('provide coupon name')
            }else{
                  let expirationTime = ''
                const couponEntries  = await strapi.db.query('api::discount-coupon.discount-coupon').findMany({
                   select:['couponName','couponType','amountOffValue','percentOffValue','duration','durationInMonth','noOfRedemption','updatedAt','createdAt'],
                    where: {
                      couponName:{
                        $eq:couponName
                      } 
                     },
                  });
                  console.log("cpn",couponEntries);
                  if(couponEntries.length>0){
                    let  uniqueCoupon =  couponEntries.filter((cpn)=>{
                 return  couponName === cpn.couponName
                     })
                    if(uniqueCoupon.length>0){
                    
                 
                      console.log("in fid",uniqueCoupon);
                      if(uniqueCoupon[0].duration!=='forever'){
                        expirationTime = ((uniqueCoupon[0].durationInMonth) *30*24*60*60*1000);
                        const  currTime = new Date().getTime();
                        const {createdAt}= uniqueCoupon[0]
                         
                        const  validationTime = (new Date(createdAt).getTime()) + expirationTime ;
                        console.log("currTime",currTime,"validationTime",validationTime);
                        
                        if(currTime >  validationTime){
                            console.log("expired");
                         return  ctx.badRequest('coupon expired')
                        }
                          // if(uniqueCoupon[0].duration!=='once')
                          // {
  
                          //     expirationTime = ((uniqueCoupon[0].durationInMonth) *30*24*60*60*1000);
                          //     const  currTime = new Date().getTime();
                          //     const {createdAt}= couponEntries[0]
                               
                          //     const  validationTime = (new Date(createdAt).getTime()) + expirationTime ;
                          //     console.log("currTime",currTime,"validationTime",validationTime);
                              
                          //     if(currTime >=validationTime){
                          //         console.log("expired");
                          //      return  ctx.badRequest('coupon expired')
                          //     }
  
                          // }
                          
                    
                         
                      }
                     
                       let  amount_off ;
                       let  percent_off;
                       console.log('56',uniqueCoupon[0].couponType);
                        if(uniqueCoupon[0].couponType == "percentOff"){
                          console.log("percent");
                          percent_off = uniqueCoupon[0].percentOffValue;
                        }else{
                          amount_off = uniqueCoupon[0].amountOffValue;
                        }
  // console.log("here",amount_off,percent_off);
           return   ctx.send({
                  'statusCode': 200,
                  'amount_off': amount_off ? amount_off :null,
                  'percent_off': percent_off? percent_off:null
              })
                      
                    }
                    else{
                      return ctx.badRequest('invalid coupon')
                    }
                  }
                 
                  else{
                    return ctx.badRequest('invalid coupon')
                  }
             console.log("couponEntries",couponEntries);
            }
            
        } catch (error) {
            
        }
        
    
    },
  }))
;
