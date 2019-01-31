import device_PLC from "./device_PLC";

const key_point_yin_feng_ji = "de_1_yinfengji_start_stop"

export default class device_PLC_RanMeiZhengQi extends device_PLC{
  constructor(){
    super()
    this.byteArrayLength=490
  }
  getPowerInfo(){
    return this.getDeviceInfoFields()[key_point_yin_feng_ji].value>0x7F?1:0
  }
}
