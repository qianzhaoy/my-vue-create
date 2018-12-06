import axios from "axios";
import qs from "qs";
import { Dialog } from "vant";
import router from "@/router";

const instance = axios.create({
  timeout: 10000,
  baseURL: "/v1"
});

instance.interceptors.request.use(
  config => {
    if (["post", "put"].indexOf(config.method.toLocaleLowerCase()) > -1) {
      config.data = qs.stringify(config.data);
    }
    if (!config.headers.Openid) {
      config.headers.Openid = sessionStorage.getItem("openid");
    }
    return config;
  },
  err => Promise.reject(err)
);

instance.interceptors.response.use(
  res => {
    console.log(res.data);
    return res.data;
  },
  error => {
    const res = error.response;
    switch (res.data.code) {
      case 422:
      case 400: {
        const flag = Array.isArray(res.data.data) && res.data.data.length;
        Dialog.alert({
          message: flag ? res.data.data[0].message : res.data.message
        });
        break;
      }
      case 401:
        router.push("/enterUser");
        break;
      default:
        break;
    }
    return Promise.reject(error);
  }
);

export const post = (url, data, config = {}) =>
  instance.post(url, data, config);

export const put = (url, data, config = {}) => instance.put(url, data, config);

export const get = (url, params, config = {}) =>
  instance.get(url, {
    params,
    ...config
  });

export const deleteMethod = (url, config = {}) =>
  instance({
    url,
    method: "delete",
    ...config
  });

export default {
  install(Vue) {
    Vue.prototype.$reqGet = get;
    Vue.prototype.$reqPost = post;
    Vue.prototype.$reqPut = put;
    Vue.prototype.$reqDel = deleteMethod;
  }
};
