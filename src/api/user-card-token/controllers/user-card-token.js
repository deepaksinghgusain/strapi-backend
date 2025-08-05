"use strict";

/**
 *  user-card-token controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::user-card-token.user-card-token",
  ({ strapi }) => ({
    async create(ctx) {
      const body = ctx.request.body;
      const data = await strapi
        .service("api::user-card-token.user-card-token")
        .createUpdateCard(body);
      // const response = await super.create(ctx);
      return data;
    },
    async findOne(ctx) {
      const { id } = ctx.params;
      // console.log("id - ", id)
      // var content = await super.findOne(ctx)
      var content = await strapi.db.connection.transaction(
        async (transacting) => {
          const userStripToken = await strapi
            .query("api::user-card-token.user-card-token")
            .findOne({ where: { userId: id } }, { transacting });
          console.log('saved usercardtoken' ,userStripToken);
          if (userStripToken == null) {
            ctx.body = [];
          } else {
            const data = await strapi
              .service("api::user-card-token.user-card-token")
              .getExistingCard(
                userStripToken.stripeCustomerId,
                userStripToken.stripeCardToken,
                userStripToken.stripeCardId
              );
              
              console.log('data ',data)
              
              ctx.body = { data, cid: userStripToken.stripeCustomerId };
          }

          return ctx.body;
        }
      );
    },
    
  })
);
