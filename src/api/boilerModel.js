import request from '@/utils/request'

export function getBoilerModelListByConditionAndPage(query) {
  return request({
    url: '/boilermodel/boilermodellistbyconditionandpage',
    method: 'get',
    params: query
  })
}

export function getBoilerModelListByCondition(query) {
  return request({
    url: '/boilermodel/boilermodellistbycondition',
    method: 'get',
    params: query
  })
}

export function editBoilerModel(data) {
  return request({
    url: '/boilermodel/editboilermodel',
    method: 'post',
    data:data
  })
}
export function deleteBoilerModelById(id) {
  return request({
    url: '/boilermodel/deleteboilermodelbyid',
    method: 'post',
    params:{id}
  })
}
