import request from '@/utils/request'
import qs from 'qs'

export function getUserInfo(employeeId) {
  return request({
    url: '/webapi/boilermanage/user/info',
    method: 'get',
    params:{employeeId}
  })
}
export function getUserListByConditionAndPage(query) {
  return request({
    url: '/webapi/boilermanage/user/list',
    method: 'get',
    params: query
  })
}
export function getUserListByCondition(query) {
  return request({
    url: '/user/userlistbycondition',
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

export function editUserRole(data) {
  return request({
    url: '/user/edituserrole',
    method: 'post',
    data:data
  })
}
export function editUser(user) {
  return request({
    url: '/webapi/boilermanage/user/modify',
    method: 'post',
    data:{"user": user}
  })
}
export function editUserPass(data) {
  return request({
    url: '/user/editUserPass',
    method: 'post',
    data: data
  })
}

export function deleteUserById(id) {
  return request({
    url: '/webapi/boilermanage/user/remove',
    method: 'post',
    data: qs.stringify({id: id})
  })
}
