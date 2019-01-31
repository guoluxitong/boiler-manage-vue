import request from '@/utils/request'
export function loginByUsername(userName, passWord) {
  return request({
    url: '/account/signin',
    method: 'post',
    params:{ 'loginid': userName, 'password': passWord}
  })
}
