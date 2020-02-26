import request from "@/api/request";

// 获取分类列表
function getkindList(data) {
  return request({
    url: "/api/leju/front/kind/list",
    method: "get",
    data
  });
}
// 获取分类商品列表
function getShoppList(data) {
  return request({
    url: "/api/leju/front/product/list",
    method: "get",
    data
  });
}
// 获取商品详情
function getShoppDetail(data) {
    return request({
      url: "/api/leju/front/product/detail",
      method: "get",
      data
    });
  }

export default {
  getkindList,
  getShoppList,
  getShoppDetail
};
