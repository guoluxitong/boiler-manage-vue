import {deviceModel} from "./sdcSoftDevice";
import device_CTL_RT_X6_RY from './device_CTL_RT_X6_RY'
export default class device_CTL_RT_X6_RYRS extends device_CTL_RT_X6_RY{
  constructor(){
    super()
    this.byteArrayLength=57
  }
  getBaseInfoFields(){
    let map=this.getFieldsMap(deviceModel.key_base)
    let runLife=map[this.deviceModel.key_point_run_life].value
    map[this.deviceModel.key_point_run_days].value=runLife/24
    map[this.deviceModel.key_point_run_days].valueString=parseInt(runLife/24) + "天";
    map[this.deviceModel.key_point_run_hours].value=runLife%24
    map[this.deviceModel.key_point_run_hours].valueString=runLife%24 + "时";
    map[this.getUiItem(this.getMockFields(),"mo_chushuiwendu")]
    map[this.getUiItem(this.getMockFields(),"mo_huishuiwendu")]
    map[this.getUiItem(this.getMockFields(),"mo_paiyanwendu")]
    return map
  }
}
