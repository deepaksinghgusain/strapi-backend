
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const { ValidationError } = require("@strapi/utils").errors;


module.exports = {

  

    async beforeCreate(event) {
        const { data } = event.params;
        // console.log("LIFECYCLE>StripeCoupon>beroreCreate ", event,"data before create",data);

        let  couponPayload ={
             name : data.couponName,
             currency:'usd',
             id : data.couponName
          }

        if(data.couponType=='percentOff'){
              if(data.percentOffValue==null){
                 throw   new ValidationError('percentValueOff cant be empty')
              }else{
                couponPayload.percent_off = data.percentOffValue;
              }
        }
        if(data.couponType=='amountOff'){
            if(data.amountOffValue==null){
               throw   new ValidationError('amountOffValue cant be empty')
            }else{
                couponPayload.amount_off = (data.amountOffValue)*100;
            }
      }

          if(data.duration=='month'){
            couponPayload.duration = 'repeating';
            if(data.durationInMonth!=null){
             couponPayload.duration_in_months = data.durationInMonth;
            }else{
                throw   new ValidationError('durationInMonth cant be empty')
            }
           
          }else{
            couponPayload.duration = data.duration;
          }
      
          try {
            const coupon = await stripe.coupons.create(couponPayload);
            if(coupon.id!=null){
              data.couponId = coupon.id;
              data.publishedAt = Date.now();
            }
          //  console.log("couponPayload",coupon);
          } catch (error) {
            throw   new ValidationError(error)
          }
           
           
    
        console.log("LIFECYCLE>StripeCoupon>beroreCreate  finished ");
      },

  

    async beforeUpdate(event) {
        const { data ,where} = event.params;
        // console.log("LIFECYCLE>coupon>>afterUpdate ",data,where,event);
      
           
        try {
          if(data.couponId!=null){
            // const coupons = await stripe.coupons.update(
            //   data.couponId,
            //   {name:data.couponName,
            //   }
        
            //   );

              const entry = await strapi.entityService.findOne('api::stripe-coupon.stripe-coupon', where.id, {
           
              });
              
              if(entry!=null){
                data.couponName = entry.couponName
                data.couponType = entry.couponType
                data.amountOffValue= entry.amountOffValue 
                data.percentOffValue=entry.percentOffValue 
                data.duration=entry.duration
                data.durationInMonth = entry.durationInMonth 
              }
             
          
           
          }

        
          
        } catch (error) {
          console.log("error==>",error);
        }
       

     


          },

    async beforeDelete(event) {
        const { data,where} = event.params;
        // console.log("LIFECYCLE>stripeCoupon>beforeDelete ",data,where);
   
         
        try {
          

          const entry = await strapi.entityService.findOne('api::stripe-coupon.stripe-coupon', where.id, {
           
          });

          // console.log("entry",entry);
           if(entry.couponId !=null){
            const deleted = await stripe.coupons.del(
              entry.couponId
            );
  
           }
        
        
        } catch (error) {
          // console.log("error==>in delete coupon",error);
          throw   new ValidationError('error occured during deletion')
        }
    
       
      },
  };
  