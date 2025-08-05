'use strict';

/**
 * stripe-coupon service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::stripe-coupon.stripe-coupon');
