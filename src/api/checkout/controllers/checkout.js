'use strict';

/**
 * A set of functions called "actions" for `checkout`
 */
var axios = require("axios");

module.exports = {
  checkoutURL: async (ctx) => {
    try {
      const body = ctx.request.body;
      console.log("checkout", body);
      const data = await strapi.service('api::checkout.checkout').createDynamicProductCheckoutURL(body)
      console.log("checkout link", data);
      ctx.body = data;
    } catch (err) {
      ctx.body = err;
    }
  },
  orderUpdate: async (ctx) => {
    try {
      const event = ctx.request.body;
      const data = await strapi.service('api::checkout.checkout').orderUpdateService(ctx);
      console.log(data, "============data============");
      ctx.body = data;
    } catch (err) {
      ctx.body = err;
    }
  }
};
