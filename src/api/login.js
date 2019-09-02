import request from '@/utils/request'
import qs from 'qs'

export function login(account, password) {
  return request({
    url: '/account/customer/login',
    method: 'post',
    data: qs.stringify({ loginId: account, password: password})
  })
}

export function getUserInfo(employeeId) {
  return request({
    url: '/webapi/boilermanage/user/info',
    method: 'get',
    params:{ "employeeId": employeeId}
  })
}
export function loginout(query) {
  return request({
    url: '/webapi/boilermanage/logout/out',
    method: 'get',
    params: query
  })
}
