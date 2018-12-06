import { get } from "./axios";
import { WX_REDIRECT } from "./const";
import queryString from "query-string";

export default async () => {
  if (sessionStorage.getItem("openid")) {
    return null;
  }
  const querys = queryString.parse(location.search);
  const { data } = await get("wx/get-openid", {
    code: querys.code
  });

  if (data) {
    sessionStorage.setItem("openid", data.openid);
    sessionStorage.setItem("subscribe", data.subscribe);
  } else {
    window.location.href = WX_REDIRECT;
  }
};
