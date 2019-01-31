import parentStartStopField from '../startStopField'
export default class startStopField extends parentStartStopField {
  haveValue(...bytes){
    this.value=((bytes[0] & 0xFF) << 8) | (bytes[1] & 0xFF);
    return 0x7FFF != this.value;
  }
  getValueString(){
      return  (this.value/60)+":"+(this.value%60)
  }
}
