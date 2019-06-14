import request from '@/utils/request'

export function getProductListByCondition(query) {
  return request({
    url: '/product/productlistbycondition',
    method: 'get',
    params: query
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
export function productDataOnMap(query) {
  return request({
    url: '/product/productdataonmap',
    method: 'get',
    params: query
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
