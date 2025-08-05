'use strict';

/**
 *  email-us controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::email-us.email-us');
