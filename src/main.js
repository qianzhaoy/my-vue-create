import "normalize.css";
import "./style/common.less";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import axios from "./core/axios";
Vue.use(axios);

import { Button, Cell, CellGroup, Locale } from "vant";
Vue.use(Button);
Vue.use(Cell).use(CellGroup);

const messages = {
  "zh-CN": {
    vanCouponList: {
      disabled: "已用或过期优惠券"
    }
  }
};
Locale.add(messages);

import VeeValidate, { Validator } from "vee-validate";
import zhCN from "vee-validate/dist/locale/zh_CN";
Validator.localize("zh-CN", zhCN);
Vue.use(VeeValidate, {
  locale: "zh-CN"
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
