import request from '@/utils/request'

export function getEnterpriseListByConditionAndPage(query) {
    return request({
        url: '/enterprise/enterpriselistbyconditionandpage',
        method: 'get',
        params: query
    })
}

export function getEnterpriseListByCondition(query) {
    return request({
        url: '/enterprise/enterpriselistbycondition',
        method: 'get',
        params: query
    })
}

export function editEnterprise(data) {
    return request({
        url: '/enterprise/editenterprise',
        method: 'post',
        data:data
    })
}
export function deleteEnterpriseById(id) {
    return request({
        url: '/enterprise/deleteenterprisebyid',
        method: 'post',
        params:{id}
    })
}
