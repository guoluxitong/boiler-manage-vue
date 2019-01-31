import request from '@/utils/request'

export function getDictionaryListByCondition(query) {
  return request({
    url: '/dictionary/dictionarylistbycondition',
    method: 'get',
    params: query
  })
}

export function editDictionary(data) {
  return request({
    url: '/dictionary/editdictionary',
    method: 'post',
    data:data
  })
}
export function deleteDictionaryById(id) {
  return request({
    url: '/dictionary/deletedictionarybyid',
    method: 'post',
    params:{id}
  })
}
