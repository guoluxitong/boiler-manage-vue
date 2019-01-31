import parentMediaField from '../mediaField'
export default class mediaField extends parentMediaField {
  haveValue(...bytes){
    this.value = bytes[1] & 0xFF;
    return true;
  }
}
