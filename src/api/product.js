import request from '@/utils/request'
import qs from 'qs'
export function productSearch(data) {
  return request({
    url: '/webapi/boilermanage/product/search',
    method: 'post',
    data: data.product,
    params: {pageNum: data.pageNum, pageSize: data.pageSize}
  })
}

export function getProductUsers(productId) {
  return request({
    url: '/webapi/boilermanage/product/users',
    method: 'get',
    params: {productId}
  })
}
export function findSoldProduct() {
  return request({
    url: '/webapi/boilermanage/product/sold',
    method: 'get'
  })
}
export function getUsers(productId) {
  return request({
    url: '/webapi/boilermanage/product/users',
    method: 'get',
    params: {productId: productId}
  })
}
export function editProduct(data) {
  return request({
    url: '/webapi/boilermanage/product/modify',
    method: 'post',
    data: data
  })
}

export function productSell(data) {
    return request({
        url: '/webapi/boilermanage/product/sell',
        method: 'post',
        data: data
    })
}
export function insertProduct(data) {
  return request({
    url: '/webapi/boilermanage/product/create',
    method: 'post',
    data: data
  })
}

export function modifyProductUser(productId,data) {
  return request({
    url: '/webapi/boilermanage/product/users/modify',
    method: 'post',
    params:{productId},
    data:data
  })
}
export function deleteProductById(id,controllerNo) {
  return request({
    url: '/webapi/boilermanage/product/remove',
    method: 'post',
    data: qs.stringify({id: id, controllerNo: controllerNo})
  })
}
export function productTypeAmountByCondition(userId) {
  return request({
    url:'/product/productTypeAmountByCondition',
    method:'get',
    params:{userId:userId}
  })

}
