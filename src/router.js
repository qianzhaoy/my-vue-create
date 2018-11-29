import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/follow",
      component: () => import("@/views/follow")
    },
    {
      path: "/enterUser",
      component: () => import("@/views/enterUser")
    },
    {
      path: "/userInfo",
      component: () => import("@/views/userInfo")
    },
    {
      path: "/receiveCoupon",
      component: () => import("@/views/receiveCoupon")
    },
    {
      path: "/couponList",
      component: () => import("@/views/couponList")
    }
  ]
});
