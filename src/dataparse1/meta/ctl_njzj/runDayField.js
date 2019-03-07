import parentBaseInfoField from '../baseInfoField'
export default class runDayField extends parentBaseInfoField {
  haveValue(...bytes){
    this.value=((bytes[0] & 0xFF) << 8) | (bytes[1] & 0xFF);
    return true
  }
}
