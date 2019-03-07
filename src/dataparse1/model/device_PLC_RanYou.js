import device_PLC from "./device_PLC";

const key_point_ran_shao_qi_status = "ba_ranshaoqizhuangtai"

export default class device_PLC_RanYou extends device_PLC{
  getPowerInfo(){
      return this.getBaseInfoFields()[key_point_ran_shao_qi_status].value
  }
}
