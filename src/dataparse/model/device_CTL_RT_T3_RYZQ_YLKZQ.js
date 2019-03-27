import {deviceModel} from "./sdcSoftDevice";
import device_CTL_RT_T3_RYZQ from './device_CTL_RT_T3_RYZQ'
export default class device_CTL_RT_T3_RYZQ_YLKZQ extends device_CTL_RT_T3_RYZQ{
  constructor(){
    super()
    this.byteArrayLength=89
  }
  getBaseInfoFields(){
    let map=this.getFieldsMap(deviceModel.key_base)
    let runLife=map[this.deviceModel.key_point_run_life].value
    map[this.deviceModel.key_point_run_days].value=runLife/24
    map[this.deviceModel.key_point_run_days].valueString=parseInt(runLife/24) + "天";
    map[this.deviceModel.key_point_run_hours].value=runLife%24
    map[this.deviceModel.key_point_run_hours].valueString=runLife%24 + "时";
    map[this.getUiItem(this.getMockFields(),"mo_lengningqiyanwen")]
    map[this.getUiItem(this.getMockFields(),"mo_jishuiwendu")]
    map[this.getUiItem(this.getMockFields(),"mo_shuiweixinhao")]
    map[this.getUiItem(this.getMockFields(),"mo_paiyanwendu")]
    map[this.getUiItem(this.getMockFields(),"mo_jienengqiyanwen")]
    return map
  }
}
