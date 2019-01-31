import request from '@/utils/request'
import { getToken } from '@/utils/auth'

export function getResourceByAccount() {
  return request({
    url: '/resource/resourcebyaccount',
    method: 'get',
    params: { account:getToken().userName},
  })
}

export function getResourceListByCondition(query) {
  return request({
    url: '/resource/resourcelistbycondition',
    method: 'get',
    params: query
  })
}

export function getResourceResIdListByRoleId(roleId) {
  return request({
    url: '/resource/resourceresidlistbyroleid',
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
