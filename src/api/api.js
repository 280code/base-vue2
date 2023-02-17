import request from '@/utils/request'

export function get(data) {
  return request({
    url: '/api/get',
    params:data
  })
}

export function post(data) {
  return request({
    url: '/api/post',
    method: 'post',
    data: data
  })
}

