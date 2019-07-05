import request from '@/utils/request'
import qs from 'qs'
export function getBoilerCustomerListByConditionAndPage(query) {
  return request({
    url: '/webapi/boilermanage/customer/list',
    method: 'get',
    params: query
  })
}

export function getBoilerCustomerListByCondition(query) {
  return request({
    url: '/boilercustomer/boilercustomerlistbycondition',
    method: 'get',
    params: query
  })
}
export function getBoilerCustomerListByName(name) {
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
export function editBoilerCustomer(data) {
  console.log(data)
  return request({
    url: '/webapi/boilermanage/customer/modify',
    method: 'post',
    data: data
  })
}
export function deleteBoilerCustomerById(id) {
  return request({
    url: '/webapi/boilermanage/customer/remove',
    method: 'post',
    data: qs.stringify({id: id})
  })
}
