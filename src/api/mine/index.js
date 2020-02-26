import request from "@/api/request";

// 获取用户详情
function userDetail(data) {
  return request({
    url: "/api/leju/admin/client/userDetail",
    method: "get",
    data
  });
}

export default {
    userDetail
};
