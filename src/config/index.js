export const config={
    //测试环境使用
    development_base_ip:'localhost',
    development_base_port:'8091',
    //正式环境当中使用
    product_base_ip:'boilermanage.sdcsoft.com.cn',
    product_base_port:'',
    //设备相关url（1）、获得字节数据 （2）、获得设备信息
    device_about_url:'http://output.sdcsoft.com.cn',
    //测试环境-数据报表url
    report_data_url:'http://192.168.0.103:8083',
    //正式环境-数据报表url
    //report_data_url:'http://report.sdcsoft.com.cn',
    //首页地址
    default_home_url:'https://www.baidu.com',
    //升级地址
    helpDocumentHref:'http://autoupdate.sdcsoft.com.cn/files/BoilerPlantSystem/document/help.docx?'+Math.random()
}