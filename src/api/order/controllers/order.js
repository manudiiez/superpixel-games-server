'use strict';

/**
 * order controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::order.order', ({ strapi }) => ({
    async getPreference(ctx) {
        ctx.body = 'Pago y pedido generado.'
    },
    async postComentarios(ctx) {
        ctx.body = 'postComentarios'
    }
}));

