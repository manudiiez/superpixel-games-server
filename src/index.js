'use strict';

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {
    // mercadopago.configure({
    //   sandbox: process.env.MERCADO_PAGO_SANDBOX == "true" ? true : false,
    //   access_token:
    //     process.env.MERCADO_PAGO_SANDBOX == "true"
    //       ? process.env.MERCADO_PAGO_SAND_ACCESS_TOKEN
    //       : process.env.MERCADO_PAGO_PROD_ACCESS_TOKEN,
    // });
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/*{ strapi }*/) { },
};
