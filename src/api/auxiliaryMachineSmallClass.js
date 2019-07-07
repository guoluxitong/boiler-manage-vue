import request from '@/utils/request'

export function getAuxiliaryMachineSmallClassListByCondition(partCategoryId) {
    return request({
        url: '/webapi/boilermanage/partsubcategory/list',
        method: 'get',
        params: {partCategoryId}
    })
}

export function editAuxiliaryMachineSmallClass(data) {
  return request({
    url: '/auxiliarymachinesmallclass/editauxiliarymachinesmallclass',
    method: 'post',
    data: data
  })
}
export function deleteAuxiliaryMachineSmallClassById(id) {
  return request({
    url: '/auxiliarymachinesmallclass/deleteauxiliarymachinesmallclassbyid',
    method: 'post',
    params:{id}
  })
}
