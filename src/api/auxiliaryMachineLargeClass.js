import request from '@/utils/request'

export function getAuxiliaryMachineLargeClassListByCondition(query) {
    return request({
        url: '/webapi/boilermanage/partcategory/list',
        method: 'get',
        params: query
    })
}

export function editAuxiliaryMachineLargeClass(data) {
  return request({
    url: '/auxiliarymachinelargeclass/editauxiliarymachinelargeclass',
    method: 'post',
    data:data
  })
}
export function deleteAuxiliaryMachineLargeClassById(id) {
  return request({
    url: '/auxiliarymachinelargeclass/deleteauxiliarymachinelargeclassbyid',
    method: 'post',
    params:{id}
  })
}
