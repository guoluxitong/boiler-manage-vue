import request from '@/utils/request'
import qs from 'qs'
export function getProductAuxiliaryMachineInfoListByProductId(query) {
  return request({
    url: '/webapi/boilermanage/productpartinfo/list',
    method: 'get',
    params: query
  })
}
export function createProductAuxiliaryMachineInfoList(data) {
  return request({
    url: '/webapi/boilermanage/productpartinfo/create',
    method: 'post',
    data: data
  })
}
export function editProductAuxiliaryMachineInfoList(productPartInfo) {
  return request({
    url: '/webapi/boilermanage/productpartinfo/modify',
    method: 'post',
    data: {productPartInfo: productPartInfo}
  })
}
export function removeProductAuxiliaryMachineInfoList(data) {
  return request({
    url: '/webapi/boilermanage/productpartinfo/remove',
    method: 'post',
    data: qs.stringify({productId: data.productId, productPartInfoId: data.productPartInfoId})
  })
}
