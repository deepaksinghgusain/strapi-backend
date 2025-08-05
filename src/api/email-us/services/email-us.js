'use strict';

/**
 * email-us service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::email-us.email-us');
