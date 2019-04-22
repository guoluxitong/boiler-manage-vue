import request from '@/utils/request'

export function uploadFile () {
  return request({
    url: '/upload',
    method: 'post',
  })
}
export function deleteFile (path) {
  return request({
    url:'/upload/deleteFile',
    method:'post',
    params:{path}
  })
}
