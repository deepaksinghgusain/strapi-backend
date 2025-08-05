'use strict';

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
/**
 * coupons service.
 */

module.exports = {
  validateCouponService: async(coupon) => {
    var customResponse = {};
    var promotionCode = await stripe.coupons.retrieve(coupon);
    if(promotionCode.statusCode == undefined){
      if(promotionCode.valid == false){
        customResponse.error = "This coupon code is expired"
      }else{
        customResponse = promotionCode;
      }
    }else{
      customResponse = promotionCode;
    }
    return customResponse
  }
}
