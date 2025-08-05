'use strict';

/**
 * stripe-coupon router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::stripe-coupon.stripe-coupon');
