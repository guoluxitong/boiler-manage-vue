import device_CTL_NJZJ_IPK2_485 from './device_CTL_NJZJ_IPK2_485'

export default class device_CTL_NJZJ_IPT2_485 extends device_CTL_NJZJ_IPK2_485{
    constructor(){
        super()
        this.byteArrayLength=1749
    }
   /* handleByteField(byteField,bytes=[]){
        if(byteField.haveValue(bytes[byteField.startIndex],bytes[byteField.startIndex+1])){
            this.addField(byteField.getDeviceFieldForUI())
        }
    }
    handleDeviceNo(bytes=[]){
        this.deviceNo=""
    }*/
}
