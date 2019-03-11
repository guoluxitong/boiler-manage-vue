import device_CTL from './device_CTL'
import {byteToString} from '../../utils/dataparse'

const device_suffix_beng = "_beng"
const device_suffix_fan = "_fan"

const key_point_ran_shao_qi = "de_ranshaoqi"
const key_point_jia_re_zu = "se_jiarezushu"
const key_point_yin_feng_ji = "de_yinfengji_fan"

export default class device_CTL_NJZJ_IP extends device_CTL{
  handleDeviceNo(bytes=[]){
    let deviceNo=byteToString(bytes.slice(1,20))
    this.deviceNo=deviceNo.substring(deviceNo.length-10,deviceNo.length)
  }
  getMode(){

  }
}
