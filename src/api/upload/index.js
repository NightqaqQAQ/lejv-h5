import request from "@/api/request";

// 上传头像
function uploadAvatar(data) {
  return request({
    url: "/api/leju/admin/material/uploadAndSaveImg",
    method: "post",
    data
  });
}

export default {
    uploadAvatar
};
