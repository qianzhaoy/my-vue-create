import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "./core/axios";
import VeeValidate from "vee-validate";
import "normalize.css";
import "./style/common.scss";

import { Button, Cell, CellGroup } from "vant";
Vue.use(Button);
Vue.use(Cell).use(CellGroup);

Vue.use(axios);
Vue.use(VeeValidate);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
