import request from '@/utils/request'

export function getRoleListByCondition(query) {
  return request({
    url: '/role/rolelistbycondition',
    method: 'get',
    params: query
  })
}
export function getRoleListByUserId(userId) {
  return request({
    url: '/role/rolelistbyuserid',
    method: 'get',
    params: {userId}
  })
}

export function editRole(data) {
  return request({
    url: '/role/editrole',
    method: 'post',
    data:data
  })
}

export function editRoleResource(data) {
  return request({
    url: '/role/editroleresource',
    method: 'post',
    data:data
  })
}

export function deleteRoleById(roleId) {
  return request({
    url: '/role/deleterolebyid',
    method: 'post',
    params:{roleId}
  })
}
