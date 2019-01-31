import device_PLC from "./device_PLC"

const key_point_jia_re_zu = "mo_qidongjiarezushu"

export default class device_PLC_Dian extends device_PLC{
  getPowerInfo(){
    return this.getMockFields()[key_point_jia_re_zu].value>0?1:0
  }
}
