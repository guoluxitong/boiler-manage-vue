import request from '@/utils/request'
import qs from 'qs'
export function getProductListByCondition(data) {
  console.log(data)
  return request({
    url: '/webapi/boilermanage/product/search',
    method: 'post',
    data: data.product,
    params: {pageNum: data.pageNum, pageSize: data.pageSize}
  })
}

export function getProductUserListByProductCondition(query) {
  return request({
    url: '/product/productuserListbycondition',
    method: 'get',
    params: query
  })
}
export function getProductByboilerNo(query) {
  return request({
    url: '/product/productbyboilerno',
    method: 'get',
    params: query
  })
}
export function productDataOnMap(product) {
  return request({
    url: '/webapi/boilermanage/product/map',
    method: 'get',
    params: {product: product}
  })
}

export function editProduct(data) {
  return request({
    url: '/product/editproduct',
    method: 'post',
    data:data
  })
}

export function updateProductSellAbout(data) {
    return request({
        url: '/product/updateproductsellabout',
        method: 'post',
        data:data
    })
}

export function insertManyProductUser(data) {
  return request({
    url: '/product/insertmanyproductuser',
    method: 'post',
    data:data
  })
}
export function deleteProductById(id,controllerNo) {
  return request({
    url: '/product/deleteproductbyid',
    method: 'post',
    params:{'id':id,'controllerNo':controllerNo}
  })
}
export function productTypeAmountByCondition(userId) {
  return request({
    url:'/product/productTypeAmountByCondition',
    method:'get',
    params:{userId:userId}
  })

}
