import device_CTL_HNWE from "./device_CTL_HNWE";

export default class device_CTL_HNWE_485 extends device_CTL_HNWE{
    constructor(){
        super()
        this.byteArrayLength=58
    }
    getDeviceFocusFields(){
        let map=this.getBaseInfoFields()
        map.mo_CHgongshuiwendu=this.getMockFields()["mo_CHgongshuiwendu"]
        map.mo_CHhuishuiwendu=this.getMockFields()["mo_CHhuishuiwendu"]
        map.mo_OTCwendu=this.getMockFields()["mo_OTCwendu"]
        return map
    }
}