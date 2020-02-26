import request from "@/api/request";

// 获取轮播图片
function getBannerList(data){
    return request({
        url:'/api/leju/front/home/banners',
        method:'get',
        data
    })
}
function getBrandList(data){
    return request({
        url:'/api/leju/front/home/brandList',
        method:'get',
        data
    })
}

export default{
    getBannerList,
    getBrandList
}