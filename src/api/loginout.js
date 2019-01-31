import request from '@/utils/request'
export function loginout() {
  return request({
    url: '/account/loginout',
    method: 'post',
    params:{ }
  })
}
