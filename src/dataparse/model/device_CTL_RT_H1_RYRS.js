import device_CTL_RT_H1_RY from "./device_CTL_RT_H1_RY";

export default class device_CTL_RT_H1_RYRS extends device_CTL_RT_H1_RY{
    constructor(){
        super()
        this.byteArrayLength=358
    }
    getDeviceFocusFields(){
        let map=this.getBaseInfoFields()
        let runLife=map[this.deviceModel.key_point_run_life].value
        map[this.deviceModel.key_point_run_days].value=runLife/24
        map[this.deviceModel.key_point_run_hours].value=runLife%24
        map["mo_chushuiwendu"].value = this.getMockFields()["mo_chushuiwendu"]
        map["mo_huishuiwendu"].value = this.getMockFields()["mo_huishuiwendu"]
        map["mo_paiyanwendu"].value = this.getMockFields()["mo_paiyanwendu"]
        return map
    }

}
 