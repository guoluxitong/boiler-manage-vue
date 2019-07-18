import request from '@/utils/request'

export function partSubCategoryList(partCategoryId) {
    return request({
        url: '/webapi/boilermanage/partsubcategory/list',
        method: 'get',
        params: {partCategoryId}
    })
}