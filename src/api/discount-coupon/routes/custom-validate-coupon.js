module.exports = {
    routes: [
      {
        method: "GET",
        path: "/validateCoupon/:couponName",
        handler: "discount-coupon.validateCoupon",
      },
    ],
  };