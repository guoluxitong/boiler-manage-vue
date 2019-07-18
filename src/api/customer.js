import request from '@/utils/request'
import qs from 'qs'

export function getList(query) {
  return request({
    url: '/webapi/boilermanage/customer/list',
    method: 'get',
    params: query
  })
}
export function customerSearch(name) {
  return request({
    url: '/webapi/boilermanage/customer/search',
    method: 'get',
    params: {name: name}
  })
}
export function createCustomer(data) {
  return request({
    url: '/webapi/boilermanage/customer/create',
    method: 'post',
    data: data
  })
}
export function editCustomer(data) {
  return request({
    url: '/webapi/boilermanage/customer/modify',
    method: 'post',
    data: data
  })
}
export function deleteCustomer(id) {
  return request({
    url: '/webapi/boilermanage/customer/remove',
    method: 'post',
    data: qs.stringify({id: id})
  })
}
