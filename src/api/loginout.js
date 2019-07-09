import request from '@/utils/request'
export function loginout(query) {
  return request({
    url: '/webapi/boilermanage/logout/out',
    method: 'get',
    params: query
  })
}
