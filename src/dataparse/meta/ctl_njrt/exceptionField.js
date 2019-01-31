import parentExceptionField from '../exceptionField'
export default class exceptionField  extends parentExceptionField {
  haveValue(...bytes){
    let value = (bytes[0] & 0xFF) << 8 | bytes[1] & 0xFF;
    let i = 1 << this.bit;

    if ((i & value) == i) {
      this.value = 1;
      return true;
    } else {
      this.value = 0;
      return false;
    }
  }
}
