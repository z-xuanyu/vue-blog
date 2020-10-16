import request from '@/utils/request'

export function login(data) {
  return request({
    url: 'http://localhost:3000/admin/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: 'https://www.fastmock.site/mock/35513a0f1d224c85247701864cd0732f/todo/getInfo',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: 'https://www.fastmock.site/mock/35513a0f1d224c85247701864cd0732f/todo/logout',
    method: 'post'
  })
}
