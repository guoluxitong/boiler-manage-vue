import request from '@/utils/request'

export function getBoilerCustomerListByConditionAndPage(query) {
  return request({
    url: '/boilercustomer/boilercustomerlistbyconditionandpage',
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

export function editBoilerCustomer(data) {
  return request({
    url: '/boilercustomer/editboilercustomer',
    method: 'post',
    data:data
  })
}
export function deleteBoilerCustomerById(id) {
  return request({
    url: '/boilercustomer/deleteboilercustomerbyid',
    method: 'post',
    params:{id}
  })
}
