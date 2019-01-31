import request from '@/utils/request'


export function getLoginUserInfo(loginid) {
  return request({
    url: '/user/getloginuserinfo',
    method: 'get',
    params:{loginid}
  })
}
export function getUserListByConditionAndPage(query) {
  return request({
    url: '/user/userlistbyconditionandpage',
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
export function editUser(data) {
  return request({
    url: '/user/edituser',
    method: 'post',
    data:data
  })
}
export function editUserPass(data) {
  return request({
    url: '/user/editUserPass',
    method: 'post',
    data:data
  })
}

export function deleteUserById(id) {
  return request({
    url: '/user/deleteuserbyid',
    method: 'post',
    params:{id}
  })
}
