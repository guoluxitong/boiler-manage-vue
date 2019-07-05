import request from '@/utils/request'
import qs from 'qs'
export function a() {
  return request({
    url: '/home/a',
    method: 'get'
  })
}
export function b(i) {
  console.log(i)
  return request({
    url: '/home/b',
    method: 'get',
    params:{i}
  })
}
export function c(i) {
  console.log(i)
  return request({
    url: '/home/c',
    method: 'get',
    params:{i}
  })
}




export function login(account, password) {
  return request({
    url: '/webapi/customer/login',
    method: 'post',
    data: qs.stringify({ "loginId": account, "password": password})
  })
}

export function getUserInfo(employeeId) {
  return request({
    url: '/webapi/boilermanage/user/info',
    method: 'get',
    params:{ "employeeId": employeeId}
  })
}

export function loginByCAS () {
    return request({
        url:'/test/signIn',
        method:'get'
    })
}
export function logoutByCAS () {
    window.location.href="http://127.0.0.1:8091/logout/out"
    /*return request({
        url:'/logout/out',
        method:'get',
        aasync:false
    })*/
}
