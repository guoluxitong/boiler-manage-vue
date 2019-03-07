import parentExceptionField from '../exceptionField'
export default class exceptionField  extends parentExceptionField {
  haveValue(...bytes){
    this.value =  bytes[1] ;
    return this.value > 0;
  }
}
