module.exports = {
  routes: [
    {
     method: 'POST',
     path: '/checkout',
     handler: 'checkout.checkoutURL',
     config: {
       policies: [],
       middlewares: [],
     },
    },
    {
      method: 'POST',
      path: '/orderUpdate',
      handler: 'checkout.orderUpdate',
      config: {
        policies: [],
        middlewares: [],
      },
     },
  ],
};
