'use strict';

/**
 *  stripe-coupon controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::stripe-coupon.stripe-coupon');
