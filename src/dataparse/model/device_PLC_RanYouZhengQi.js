import device_PLC_RanYou from "./device_PLC_RanYou"

export default class device_PLC_RanYouZhengQi extends device_PLC_RanYou{
  constructor(){
    super()
    this.byteArrayLength=490
  }
  getDeviceFocusFields(){
    let map=this.getBaseInfoFields()
    map["ba_shuiweizhuangtai"] = this.getMockFields()["ba_shuiweizhuangtai"]
    map["mo_zuizhongpaiyanwendu"] = this.getMockFields()["mo_zuizhongpaiyanwendu"]
    for (let key in map) {
      if (key == 'ba_guoluyalizhuangtai') {
        map["ba_guoluyalizhuangtai"] = this.getMockFields()["ba_guoluyalizhuangtai"]
      }else {
        map["mo_zhengqiyali"] = this.getBaseInfoFields()["mo_zhengqiyali"]
      }
    }
    return map
  }
}
