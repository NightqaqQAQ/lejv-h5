import request from "@/api/request";

// 用户注册
function registered(data) {
  return request({
    url: "/api/leju/front/user/register",
    method: "post",
    data
  });
}
function doLogin(data) {
  return request({
    url: "/api/leju/front/user/doLogin",
    method: "post",
    data
  });
}
function doLogout(data) {
  return request({
    url: "/api/leju/front/user/doLogout",
    method: "get",
    data
  });
}
export default {
  registered,
  doLogin,
  doLogout
};
