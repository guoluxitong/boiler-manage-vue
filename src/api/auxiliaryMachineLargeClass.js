import request from '@/utils/request'

export function getAuxiliaryMachineLargeClassListByConditionAndPage(query) {
    return request({
        url: '/auxiliarymachinelargeclass/auxiliarymachinelargeclasslistbyconditionandpage',
        method: 'get',
        params: query
    })
}
export function getAuxiliaryMachineLargeClassListByCondition(query) {
    return request({
        url: '/auxiliarymachinelargeclass/auxiliarymachinelargeclasslistbycondition',
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
