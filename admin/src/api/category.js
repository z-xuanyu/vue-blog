import request from '@/utils/request'
// 新建分类
export function createCategory(data){
    return request({
        url:'createCategory',
        method:'post',
        data
    })
}
// 查看分类
export function getCategory(){
    return request({
        url:"getCategory",
        method:"get"
    })
}

// 删除分类
export function deleteCategory(data){
    return request({
        url:"deleteCategory",
        method:"delete",
        data
    })
}