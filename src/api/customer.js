import request from '@/utils/request'

export function getCustomerListByCondition(query) {
    return request({
        url: '/customer/customerlistbycondition',
        method: 'get',
        params: query
    })
}

export function getCustomerListByConditionAndPage(query) {
    return request({
        url: '/customer/customerlistbyconditionandpage',
        method: 'get',
        params: query
    })
}

export function editCustomer(data) {
    return request({
        url: '/customer/editcustomer',
        method: 'post',
        data:data
    })
}
export function insertManyCustomerResource(data) {
    return request({
        url: '/customer/insertmanycustomerresource',
        method: 'post',
        data:data
    })
}
export function insertManyCustomerUser(data) {
    return request({
        url: '/customer/insertmanycustomeruser',
        method: 'post',
        data:data
    })
}
export function deleteCustomerById(id) {
    return request({
        url: '/customer/deletecustomerbyid',
        method: 'post',
        params:{id}
    })
}
