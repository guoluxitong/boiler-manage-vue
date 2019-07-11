import request from '@/utils/request'
import qs from 'qs'

export function getUserInfo(employeeId) {
  return request({
    url: '/webapi/boilermanage/user/info',
    method: 'get',
    params:{employeeId}
  })
}
export function getUserList(query) {
  return request({
    url: '/webapi/boilermanage/user/list',
    method: 'get',
    params: query
  })
}

export function getUserListByOrganizationTypeAndId(query) {
    return request({
        url: '/user/getuserlistbyorganizationtypeandid',
        method: 'get',
        params: query
    })
}
export function getUserRole(userId) {
  return request({
    url: '/webapi/boilermanage/user/find',
    method: 'get',
    params:{userId}
  })
}
export function changeUserRole(userId,role) {
  return request({
    url: '/webapi/boilermanage/user/role/modify',
    method: 'post',
    params:{userId},
    data:role
  })
}
export function editUser(user) {
  return request({
    url: '/webapi/boilermanage/user/modify',
    method: 'post',
    data:user
  })
}
export function editUserPass(data) {
  return request({
    url: '/webapi/user/change/password',
    method: 'post',
    data: qs.stringify(data)
  })
}

export function deleteUserById(id) {
  return request({
    url: '/webapi/boilermanage/user/remove',
    method: 'post',
    data: qs.stringify({id: id})
  })
}
