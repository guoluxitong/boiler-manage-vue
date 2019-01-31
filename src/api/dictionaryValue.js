import request from '@/utils/request'

export function getDictionaryValueListByType(type) {
  return request({
    url: '/dictionaryvalue/dictionaryvaluelistbytype',
    method: 'get',
    params: {type}
  })
}

export function editDictionaryValue(data) {
  return request({
    url: '/dictionaryvalue/editdictionaryvalue',
    method: 'post',
    data:data
  })
}
export function deleteDictionaryValueById(id) {
  return request({
    url: '/dictionaryvalue/deletedictionaryvaluebyid',
    method: 'post',
    params:{id}
  })
}
