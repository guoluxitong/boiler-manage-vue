import request from '@/utils/request'

export function getProductAuxiliaryMachineInfoListByProductId(query) {
  return request({
    url: '/productauxiliarymachineinfo/productauxiliarymachineinfolistbyproductid',
    method: 'get',
    params: query
  })
}

