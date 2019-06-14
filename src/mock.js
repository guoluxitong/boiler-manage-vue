//const Mock = require('mockjs');
// import { config } from '@/config/index'

// const Random = Mock.Random;
// const baseURL = process.env.NODE_ENV === 'development'
//     ? 'http://' + config.development_base_ip + ':' + config.development_base_port
//     : 'http://' + config.product_base_ip + ':' + config.product_base_port


// //定义服务器返回的数据
// const serverResponse = function () {
//     let code = Random.boolean() ? 0 : 1
//     let msg = '服务器返回成功'
//     if (code) {
//         msg = '服务器返回错误'
//     }
//     return {
//         'code': code,
//         'msg': msg
//     }
// }
// //设置请求服务器的路径及返回的数据
// Mock.mock(baseURL + '/data/index', 'post', serverResponse)
//参照以上编写自己的代码