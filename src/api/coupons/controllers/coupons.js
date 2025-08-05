'use strict';

/**
 * A set of functions called "actions" for `coupons`
 */

module.exports = {
  validateCoupon: async (ctx, next) => {
    try {
      const couponCode = ctx.params.couponCode;
      const data = await strapi.service('api::coupons.coupons').validateCouponService(couponCode);
      ctx.body = data;
    } catch (err) {
      ctx.body = err;
    }
  },
  getUserCart: async (ctx, next) => {
    const { userId } = ctx.params;
    try{
      const transacting = await strapi.db.connection.transaction();
      const campaigns = await transacting.context.raw(
        "SELECT c.id as cart_id, ccc.*  FROM carts c " +
        "LEFT JOIN carts_components cc ON cc.entity_id = c.id " +
        "LEFT JOIN components_cart_carts ccc ON ccc.id = cc.component_id " +
        "WHERE c.user_id = "+ userId
      );
      var cartId = campaigns[0][0]['cart_id'];
      var qty = 0;
      campaigns[0].map(data => {
        qty += data.qty;
      })
      var data = {cartId, qty};
      ctx.body = data;
    }catch(e){
      var data = {cartId: 0, qty: 0};
      ctx.body = data;
    }
  }
};
