import parentPowerField from '../powerField'
export default class powerField extends parentPowerField {
  haveValue(...bytes){
    this.value = bytes[1] & 0xFF;
    return true;
  }
}
