import request from '@/utils/request'
import { config } from '@/config/index'

/**
 * 通过编号获得设备子节数据
 * @param controllerNo
 */
export function getControllerByteData(controllerNo) {
    return request({
        baseURL:config.device_about_url,
        url: '/device2/get',
        method: 'post',
        params: {id:controllerNo},
        responseType: 'arraybuffer',
        transformResponse: [function (data) {
            return  new Int8Array(data,0,data.length)
        }]
    })
}

/**
 * 通过编号获得设备相关信息
 * @param controllerNo
 */
export function getControllerType(controllerNo) {
    return request({
        baseURL:config.device_about_url,
        url: '/decoder/suffix',
        method: 'post',
        params: {data:controllerNo}
    })
}
