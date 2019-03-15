import device_PLC_Dian from "./device_PLC_Dian"

export default class device_PLC_DianReShui extends device_PLC_Dian{
  constructor(){
    super()
    this.byteArrayLength=245
  }
  getDeviceFocusFields(){
    let map=this.getBaseInfoFields()
    map["mo_qidongjiarezushu"] = this.getMockFields()["mo_qidongjiarezushu"]
    map["mo_chushuiwendu"] = this.getMockFields()["mo_chushuiwendu"]
    map["mo_huishuiwendu"] = this.getMockFields()["mo_huishuiwendu"]
    map["ba_shuiweizhuangtai"] = this.getBaseInfoFields()["ba_shuiweizhuangtai"]
    return map
  }
}
