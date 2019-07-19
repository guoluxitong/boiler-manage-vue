import request from '@/utils/request'


export function partCategoryList(query) {
    return request({
        url: '/webapi/boilermanage/partcategory/list',
        method: 'get',
        params: query
    })
}