'use strict';

/**
 * review-exam service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::review-exam.review-exam');
