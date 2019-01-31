import parentExceptionField from '../exceptionField'
export default class exceptionField  extends parentExceptionField {
  haveValue(...bytes){
    this.value =  bytes[1] & 0xFF | (bytes[0] & 0xFF) << 8 ;
    if(0x7FFF == this.value){
      return false;
    }    
    return 0x5555 != this.value;
  }
}
