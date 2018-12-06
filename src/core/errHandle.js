import { Dialog } from "vant";

export default msg => {
  Dialog.alert({
    title: "警告",
    message: msg
  });
};
