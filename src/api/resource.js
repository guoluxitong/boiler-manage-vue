import request from '@/utils/request'
import { getToken } from '@/utils/auth'

export function getResourceByAccount() {
  return request({
    url: '/resource/resourcebyaccount',
    method: 'get',
    params: { account:getToken().userName},
  })
}

export function getUserResources(employeeId) {
  return request({
    url: '/webapi/boilermanage/resource/user',
    method: 'get',
    params: {employeeId}
  })
}

export function getRoleResources(roleId) {
  return request({
    url: '/webapi/boilermanage/resource/role',
    method: 'get',
    params: {roleId}
  })
}

export function editResource(data) {
  return request({
    url: '/resource/editresource',
    method: 'post',
    data:data
  })
}
export function deleteResourceById(resId) {
  return request({
    url: '/resource/deleteresourcebyid',
    method: 'post',
    params:{resId}
  })
}
