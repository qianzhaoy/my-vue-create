import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/follow",
      component: () => import("@/views/follow/index")
    },
    {
      path: "/enter-user",
      component: () => import("@/views/enterUser/index")
    },
    {
      path: "/user-info",
      component: () => import("@/views/userInfo/index")
    }
  ]
});
