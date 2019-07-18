export const config = {
  //测试环境使用
  development_base_ip: '127.0.0.1',
  development_base_port: '8080',
  //正式环境当中使用  boilermanage.sdcsoft.com.cn
  product_base_ip: 'api.sdcsoft.com.cn',
  product_base_port: '',
  //设备相关url（1）、获得字节数据 （2）、获得设备信息
  device_about_url: 'http://output.sdcsoft.com.cn',
  //测试环境-数据报表url
  report_data_url: 'http://192.168.0.103:8083',
  //正式环境-数据报表url
  //report_data_url:'http://report.sdcsoft.com.cn',
  //首页地址
  default_home_url: 'https://www.baidu.com',
  //帮助文档地址
  helpDocumentHref: 'http://autoupdate.sdcsoft.com.cn/files/BoilerPlantSystem/document/help.docx?' + Math.random(),

  baidu_weather_url: 'http://api.map.baidu.com/telematics/v3/weather',
  //城市编码URL
  baidu_map_url: 'http://api.map.baidu.com',
  //百度AK
  baidu_ak: 'eqPZV35edaZZGefOIopjLNqTSj4qI89Y',
  //高德key
  amap_key: 'be461fa7f18a297d520ddd1c7dedc753'
}
