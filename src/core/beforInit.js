import getOpenid from "./getOpenid";
import { WX_REDIRECT } from "./const";

export default async () => {
  try {
    await getOpenid();
  } catch (err) {
    window.location.href = WX_REDIRECT;
  }
};
