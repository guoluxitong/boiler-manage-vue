import request from '@/utils/request'

export function getRoleList(pageNum,pageSize) {
  return request({
    url: '/webapi/boilermanage/role/list',
    method: 'get',
    params:{pageNum,pageSize}
  })
}
export function getRoleListByUserId(userId) {
  return request({
    url: '/role/rolelistbyuserid',
    method: 'get',
    params: {userId}
  })
}

export function createRole(data) {
  return request({
    url: '/webapi/boilermanage/role/create',
    method: 'post',
    data:data
  })
}
export function editRole(data) {
  return request({
    url: '/webapi/boilermanage/role/modify',
    method: 'post',
    data:data
  })
}


export function editRoleResources(roleId,data) {
  return request({
    url: '/webapi/boilermanage/role/resource/map',
    method: 'post',
    params:{roleId},
    data:data
  })
}

export function deleteRole(roleId) {
  return request({
    url: '/webapi/boilermanage/role/remove',
    method: 'post',
    params:{roleId}
  })
}
