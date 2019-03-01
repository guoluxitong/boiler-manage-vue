import device_CTL_RT_H1_RY from "./device_CTL_RT_H1_RY";

export default class device_CTL_RT_H1_RYZQ extends device_CTL_RT_H1_RY {
    constructor() {
        super()
        this.byteArrayLength = 151
    }
    getDeviceFocusFields(){
        let map=this.getBaseInfoFields()
        let runLife=map[this.deviceModel.key_point_run_life].value
        map[this.deviceModel.key_point_run_days].value=runLife/24
        map[this.deviceModel.key_point_run_hours].value=runLife%24
        return map
    }
}