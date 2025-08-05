module.exports = {
  routes: [
    {
     method: 'GET',
     path: '/coupons/:couponCode',
     handler: 'coupons.validateCoupon',
     config: {
       policies: [],
       middlewares: [],
     },
    },
    {
      method: 'GET',
      path: '/carts/getUserCart/:userId',
      handler: 'coupons.getUserCart',
      config: {
        policies: [],
        middlewares: [],
      },
     },
  ],
};
