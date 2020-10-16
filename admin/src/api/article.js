import request from "@/utils/request";

// 新建文章
export function createArticle(data) {
  return request({
    url: "createArticle",
    method: "post",
    data
  });
}

// 查询文章

export function getArticle(data) {
  return request({
    url: "getArticle",
    method: "get",
    params: data
  });
}
// 获取编辑文章内容
export function getEditArticle(id) {
  return request({
    url: `getEditArticle/${id}`,
    method: 'get'
  })
}
// 删除文章

export function deleteArticle(data) {
  return request({
    url: "deleteArticle",
    method: "delete",
    data
  });
}

// 更新文章
export function updateArticle(data) {
  return request({
    url: "updateArticle",
    method: "put",
    data
  });
}

// 上传文章图片
export function imgUpload(data) {
  return request({
    url: "imgUpload",
    method: "post",
    data,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}