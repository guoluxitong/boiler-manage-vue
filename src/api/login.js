import request from '@/utils/request'
export function loginByUsername(userName, passWord) {
  return request({
    url: '/account/signin',
    method: 'post',
    params:{ 'loginid': userName, 'password': passWord}
  })
}
export function loginByCAS () {
    return request({
        url:'/test/signIn',
        method:'get'
    })
}
export function logoutByCAS () {
    window.location.href="http://localhost:8091/logout/out"
    /*return request({
        url:'/logout/out',
        method:'get',
        aasync:false
    })*/
}
