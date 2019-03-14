import sdcSoftDevice from "./sdcSoftDevice";
export default class device_PLC extends sdcSoftDevice{
  constructor(){
    super()
    this.byteArrayLength=1024
  }
  handleByteField(byteField,bytes=[]){
    /*if(byteField.haveValue(bytes[byteField.startIndex+1],bytes[byteField.startIndex])){
      this.addField(byteField.getDeviceFieldForUI())
    }*/
    switch (byteField.bytesLength) {
      case 0:
      case 2:
        if (byteField.haveValue(bytes[byteField.startIndex + 1], bytes[byteField.startIndex])) {
          this.addField(byteField)
        }
        break;
      default:
        if (byteField.haveValue(bytes[byteField.startIndex + 1], bytes[startIndex])) {
          this.addField(byteField)
        }
        break;
    }
  }
}
