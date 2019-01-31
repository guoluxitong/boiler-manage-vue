import parentStartStopField from '../startStopField'
import {getInt16Number} from '@/utils/dataparse'
export default class startStopField extends parentStartStopField {
  haveValue(...bytes){
    this.value=getInt16Number(bytes);
    return 0x7FFF != this.value;
  }
  getValueString(){
      return  (this.value/60)+":"+(this.value%60)
  }
}
