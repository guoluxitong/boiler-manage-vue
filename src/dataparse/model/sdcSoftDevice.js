import element from "../entity/element";

export const deviceModel= {
    key_point_system_status:'o_system_status',
    key_point_power:'o_power',
    key_point_media:'o_media',
    key_point_run_life:'ba_yunxingshijian',
    key_point_run_days:'ba_yunxingtianshu',
    key_point_run_hours:'ba_yunxingxiaoshishu',

    key_base:'baseInfo',
    key_exception:'exceptionInfo',
    key_mock:'mockInfo',
    key_setting:'settingInfo',
    key_start_stop:'startStopInfo',
    key_device:'deviceInfo',
    key_open_close:'openClose',
    key_count_fields:'countfields'
}
export default class sdcSoftDevice {
    static style_horizontal=0
    static style_vertical=1
    fieldMap={
        [deviceModel.key_base]:[],
        [deviceModel.key_exception]:[],
        [deviceModel.key_mock]:[],
        [deviceModel.key_setting]:[],
        [deviceModel.key_start_stop]:[],
        [deviceModel.key_device]:[],
        [deviceModel.key_open_close]:[],
        [deviceModel.key_count_fields]:[]
    }
    constructor(){
        this.deviceNo=''
        this.byteArrayLength=0
        this.deviceModel=deviceModel
    }
    addField(deviceFieldForUI){
        for(let key in this.fieldMap){
            if(key==deviceFieldForUI.key){
                this.fieldMap[key].push(deviceFieldForUI)
            }
        }
    }
    getFieldsByGroupKey(key){
        for (let tempKey in this.fieldMap) {
            if(tempKey.indexOf(key)!=-1){
                return this.fieldMap[key]
            }
        }
    }
    getStoveElement(){
        let elementObj=new element("锅炉",element.prefix_stove)
        elementObj.setValues(element.index_a_power,this.getPower().value,this.getMedia().value,sdcSoftDevice.style_horizontal,this.getPowerInfo())
        return elementObj
    }
    getBaseInfoFields(){return this.getFieldsMap(deviceModel.key_base)}
    getExceptionFields(){return this.getFieldsMap(deviceModel.key_exception)}
    getMockFields(){return this.getFieldsMap(deviceModel.key_mock)}
    getSettingFields(){return this.getFieldsMap(deviceModel.key_setting)}
    getDeviceInfoFields(){return this.getFieldsMap(deviceModel.key_device)}
    getStartStopFields(){return this.getFieldsMap(deviceModel.key_start_stop)}
    getOpenCloseFields(){return this.getFieldsMap(deviceModel.key_open_close)}
    getCountFields(){
        return this.getFieldsMap(deviceModel.key_count_fields)
    }
    getFieldsMap(fieldsGroupKey){
        let map={}
        let list=this.fieldMap[fieldsGroupKey]
        list.forEach(item=>{
            map[item.name]=item
        })
        return map
    }
    getPower(){return this.getBaseInfoFields()[deviceModel.key_point_power]}
    getMedia(){return this.getBaseInfoFields()[deviceModel.key_point_media]}
    validateByteLength(byteArrayLength){
        return this.byteArrayLength>byteArrayLength
    }
}
