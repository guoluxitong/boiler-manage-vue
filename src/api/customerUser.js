import request from '@/utils/request'

export function getUserIdListByCustomerId(query) {
    return request({
        url: '/customeruser/getuseridlistbycustomerid',
        method: 'get',
        params: query
    })
}