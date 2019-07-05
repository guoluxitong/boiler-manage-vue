import request from '@/utils/request'

export function getDictionaryValueListByType(type) {
  return request({
    url: '/webapi/boilermanage/dictionaryvalue/list',
    method: 'get',
    params: {type: type}
  })
}

export function editDictionaryValue(data) {
  return request({
    url: '/dictionaryvalue/editdictionaryvalue',
    method: 'post',
    data: data
  })
}
export function deleteDictionaryValueById(id) {
  return request({
    url: '/dictionaryvalue/deletedictionaryvaluebyid',
    method: 'post',
    params:{id}
  })
}
