'use strict';

/**
 * email-us router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::email-us.email-us');
