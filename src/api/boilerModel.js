import request from '@/utils/request'
import qs from 'qs'
export function getBoilerModelListByConditionAndPage(query) {
  return request({
    url: '/webapi/boilermanage/productcategory/pagelist',
    method: 'get',
    params: query
  })
}

export function getBoilerModelListByCondition(orgId) {
  return request({
    url: '/webapi/boilermanage/productcategory/list',
    method: 'get',
    params: {orgId}
  })
}

export function editBoilerModel(data) {
  return request({
    url: '/webapi/boilermanage/productcategory/modify',
    method: 'post',
    data: data
  })
}
export function createBoilerModel(data) {
  return request({
    url: '/webapi/boilermanage/productcategory/create',
    method: 'post',
    data: data
  })
}
export function deleteBoilerModelById(id) {
  return request({
    url: '/webapi/boilermanage/productcategory/deleteboilermodelbyid',
    method: 'post',
    params: {id: id}
  })
}
