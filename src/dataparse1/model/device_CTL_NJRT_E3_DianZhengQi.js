import device_CTL_NJRT_E3_Dian from "./device_CTL_NJRT_E3_Dian";

export default class device_CTL_NJRT_E3_DianZhengQi extends device_CTL_NJRT_E3_Dian{
    constructor(){
        super()
        this.byteArrayLength=57
    }
    getBaseInfoFields(){
        let map=this.getBaseInfoFields()
        let runLife=map[this.deviceModel.key_point_run_life].value
        map[this.deviceModel.key_point_run_days].value=runLife/24
        map[this.deviceModel.key_point_run_hours].value=runLife%24
        return map
    }
}
