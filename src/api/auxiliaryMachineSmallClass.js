import request from '@/utils/request'

export function getAuxiliaryMachineSmallClassListByCondition(query) {
    return request({
        url: '/auxiliarymachinesmallclass/auxiliarymachinesmallclasslistbycondition',
        method: 'get',
        params: query
    })
}

export function editAuxiliaryMachineSmallClass(data) {
  return request({
    url: '/auxiliarymachinesmallclass/editauxiliarymachinesmallclass',
    method: 'post',
    data:data
  })
}
export function deleteAuxiliaryMachineSmallClassById(id) {
  return request({
    url: '/auxiliarymachinesmallclass/deleteauxiliarymachinesmallclassbyid',
    method: 'post',
    params:{id}
  })
}
