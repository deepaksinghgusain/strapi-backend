
const { ValidationError } = require("@strapi/utils").errors;


module.exports = {

  

    async beforeCreate(event) {
        const { data } = event.params;
        // console.log("LIFECYCLE>StripeCoupon>beroreCreate ", event,"data before create",data);

        // finding  all the  coupon ::- 
      
        discountCouponEntry = await strapi.entityService.findMany('api::discount-coupon.discount-coupon', {
          fields: ['id','noOfRedemption','couponName'],
          filters: {
            couponName: {
              $eq: data.couponName,
            },
          },
        })
      console.log("discountCouponEntry",discountCouponEntry);

      const uniqueCouponEntry =discountCouponEntry.filter((cpn)=>{
          return data.couponName === cpn.couponName
      })
         
        if(uniqueCouponEntry?.length>=1){
          if(uniqueCouponEntry[0].couponName === data.couponName){
            throw   new ValidationError("couponName must be unique")
          }
          
        } 

        if(data.couponType=='percentOff'){
              if(data.percentOffValue==null){
                 throw   new ValidationError("percentValueOff can't be empty")
              }
        }
        if(data.couponType=='amountOff'){
            if(data.amountOffValue==null){
               throw   new ValidationError("amountOffValue can't be empty")
            }
      }

          if(data.duration=='month'){
          
            if(data.durationInMonth==null){
              throw   new ValidationError("durationInMonth can't be empty")
               
            }
           
          }
         
       
        
           
           
    
        console.log("LIFECYCLE>StripeCoupon>beroreCreate  finished ");
      },

      async beforeUpdate(event) {
        const { data ,where } = event.params;
        //  console.log("LIFECYCLE>StripeCoupon>beroreCreate ", event,"data before create",data);


        discountCouponEntry = await strapi.entityService.findMany('api::discount-coupon.discount-coupon', {
          fields: ['id', 'noOfRedemption','couponName'],
          filters: {
            couponName: {
              $eq: data.couponName,
            },
          },
        })
      
        //  console.log("discountCouponEntry[0].couponName",discountCouponEntry,discountCouponEntry[0].couponName,data.couponName);
      
        const uniqueCouponEntry =discountCouponEntry.filter((cpn)=>{
          return data.couponName === cpn.couponName
      })
         

        if(uniqueCouponEntry?.length>=1){
          if(uniqueCouponEntry[0].couponName === data.couponName && uniqueCouponEntry[0].id !=where.id ){
            throw   new ValidationError("couponName must be unique")
          }
          
        } 

        if(data.couponType=='percentOff'){
              if(data.percentOffValue==null){
                 throw   new ValidationError("percentValueOff can't be empty")
              }
        }
        if(data.couponType=='amountOff'){
            if(data.amountOffValue==null){
               throw   new ValidationError("amountOffValue can't be empty")
            }
      }

          if(data.duration=='month'){
          
            if(data.durationInMonth==null){
              throw   new ValidationError("durationInMonth can't be empty")
               
            }
           
          }
      
        
           
    
        console.log("LIFECYCLE>StripeCouponBeforeUpdate  finished ");
      },

    // async beforeUpdate(event) {
    //     const { data ,where} = event.params;
    //     // console.log("LIFECYCLE>coupon>>afterUpdate ",data,where,event);
      
           
    //     try {
    //       if(data.couponId!=null){
    //         // const coupons = await stripe.coupons.update(
    //         //   data.couponId,
    //         //   {name:data.couponName,
    //         //   }
        
    //         //   );

    //           const entry = await strapi.entityService.findOne('api::stripe-coupon.stripe-coupon', where.id, {
           
    //           });
              
    //           if(entry!=null){
    //             data.couponName = entry.couponName
    //             data.couponType = entry.couponType
    //             data.amountOffValue= entry.amountOffValue 
    //             data.percentOffValue=entry.percentOffValue 
    //             data.duration=entry.duration
    //             data.durationInMonth = entry.durationInMonth 
    //           }
             
          
           
    //       }

        
          
    //     } catch (error) {
    //       console.log("error==>",error);
    //     }
       

     


    //       },

    // async beforeDelete(event) {
    //     const { data,where} = event.params;
    //     // console.log("LIFECYCLE>stripeCoupon>beforeDelete ",data,where);
   
         
    //     try {
          

    //       const entry = await strapi.entityService.findOne('api::stripe-coupon.stripe-coupon', where.id, {
           
    //       });

    //       // console.log("entry",entry);
    //        if(entry.couponId !=null){
    //         const deleted = await stripe.coupons.del(
    //           entry.couponId
    //         );
  
    //        }
        
        
    //     } catch (error) {
    //       // console.log("error==>in delete coupon",error);
    //       throw   new ValidationError('error occured during deletion')
    //     }
    
       
    //   },
  };
  