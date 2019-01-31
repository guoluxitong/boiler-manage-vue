import request from '@/utils/request'

export function getResourceIdListByCustomerId(query) {
    return request({
        url: '/customerresource/getresourceidlistbycustomerid',
        method: 'get',
        params: query
    })
}