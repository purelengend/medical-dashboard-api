'use strict';

/**
 * transfer-history service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::transfer-history.transfer-history');
