import request from '@/utils/request'

export function getDictionaryValueListByType(type) {
  return request({
    url: '/webapi/boilermanage/dictionaryvalue/list',
    method: 'get',
    params: {type: type}
  })
}
