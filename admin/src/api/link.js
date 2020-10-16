import request from "@/utils/request"

// 添加链接
export function addLink(data){
    return request({
        url:"addLink",
        method:"post",
        data
    })
}

//查看链接信息
export function getLinkInfo(){
    return request({
        url:"getLinkInfo",
        method:"get"
    })
}

// 删除友情链接
export function deleteLink(data){
    return request({
        url:"deleteLink",
        method:"delete",
        data
    })
}

// 更新友情链接信息
export function updataLink(data){
    return request({
        url:"updataLink",
        method:"put",
        data
    })
}