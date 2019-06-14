import request from '@/utils/request'

export function getRepairInfoListByProductId(query) {
  return request({
    url: '/repairinfo/repairinfolistbyproductid',
    method: 'get',
    params: query
  });
}
export function getRepairInfoListByDate(query) {
  return request({
    url: '/repairinfo/repairinfolistbydate',
    method: 'get',
    params: query
  });
}
export function getRepairInfoListBydate(query) {
  return request({
    url: '/repairinfo/repairinfolistbyuserdate',
    method: 'get',
    params: query
  });
}

export function getRepairInfoListByUserId(query) {
  return request({
    url: '/repairinfo/repairinfolistbyuserid',
    method: 'get',
    params: query
  });
}
export function insertRepairInfo(data) {
  return request({
    url: '/repairinfo/insertrepairinfo',
    method: 'post',
    data: data
  })
};
export function insertRepairUserInfo(data) {
  return request({
    url: '/repairinfo/insertrepairuserinfo',
    method: 'post',
    data: data
  })
};
export function deleteRepairInfoByProductId(id) {
  return request({
    url: '/repairinfo/deleterepairinfo',
    method: 'post',
    params:{id}
  })
}

