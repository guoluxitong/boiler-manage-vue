import request from '@/utils/request'
import { config } from '@/config/index'

export function countDeviceReportBaseData(query) {
    return request({
        baseURL:config.report_data_url,
        url: '/deviceinfo/countdevicereportbasedata',
        method: 'get',
        params: query,
        timeout: 30000
    })
}

export function countDeviceReportExceptionNumByExceptionName(query) {
    return request({
        baseURL:config.report_data_url,
        url: '/deviceinfo/countdevicereportexceptionnumbyexceptionname',
        method: 'get',
        params: query,
        timeout: 30000
    })
}

export function getExceptionClassFieldList() {
    return request({
        baseURL:config.report_data_url,
        url: '/deviceinfo/getexceptionclassfieldlist',
        method: 'get',
        timeout: 30000
    })
}

export function countDeviceReportExceptionNumByBoilerType(query) {
    return request({
        baseURL:config.report_data_url,
        url: '/deviceinfo/countdevicereportexceptionnumbyboilertype',
        method: 'get',
        params: query,
        timeout: 30000
    })
}
