import request from '@/utils/request'
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
