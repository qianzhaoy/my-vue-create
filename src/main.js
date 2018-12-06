import "normalize.css";
import "./style/common.less";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import axios from "./core/axios";
Vue.use(axios);

import { Button, Cell, CellGroup } from "vant";
Vue.use(Button);
Vue.use(Cell).use(CellGroup);

import VeeValidate, { Validator } from "vee-validate";
import zhCN from "vee-validate/dist/locale/zh_CN";
Validator.localize("zh-CN", zhCN);
Vue.use(VeeValidate, {
  locale: "zh-CN"
});

Vue.config.productionTip = false;

import beforRender from "./core/beforInit";

(async () => {
  // beforRender 里已经 try catch 了, 所以这里不会报错
  await beforRender();
  new Vue({
    router,
    render: h => h(App)
  }).$mount("#app");
})();
