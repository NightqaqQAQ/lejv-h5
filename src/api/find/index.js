import request from "@/api/request";

// 获取系列列表
function getSeriesAll(data){
    return request({
        url:'/api/leju/front/find/seriesAll',
        method:'get',
        data
    })
}


export default{
    getSeriesAll
}