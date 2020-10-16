import request from "@/utils/request"

// 添加标签
export function addTag(data) {
    return request({
        url: "addTag",
        method: "post",
        data
    })
}

// 获取标签列表

export function getTagList(params) {
    return request({
        url: 'getTagList',
        method: "get",
        params
    })
}

// 编辑标签信息
export function updatTagInfo(data) {
    return request({
        url: 'updataTag',
        method: 'put',
        data
    })
}

// 删除标签

export function deleteTag(data) {
    return request({
        url: 'deleteTag',
        method: 'delete',
        data
    })
}