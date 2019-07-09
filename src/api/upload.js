import request from '@/utils/request'

export function uploadFile () {
  return request({
    url: '/webapi/boilermanage/upload/uploadFile',
    method: 'post'
  })
}
export function deleteFile (path) {
  return request({
    url: '/webapi/boilermanage/upload/deleteFile',
    method: 'post',
    params: {path}
  })
}
