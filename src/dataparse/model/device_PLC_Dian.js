import device_PLC from "./device_PLC"

const key_point_jia_re_zu = "mo_qidongjiarezushu"

export default class device_PLC_Dian extends device_PLC{
  getPowerInfo(){
    let map = this.getMockFields()
    /*if (map.keys.indexOf(key_point_jia_re_zu)) {
      return map[key_point_jia_re_zu].value>0?1:0
    }*/
    for (let key in map) {
      if (key == key_point_jia_re_zu){
        return map[key_point_jia_re_zu].value>0?1:0
      }

    }
    return 0
  }
}
