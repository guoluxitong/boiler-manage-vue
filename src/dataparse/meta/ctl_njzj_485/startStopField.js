import parentStartStopField from '../startStopField'
import {getInt16Number} from '../../../utils/dataparse'
import timeCommand from '../../entity/timeCommand'
export default class startStopField extends parentStartStopField {
  haveValue(...bytes){
    this.value=getInt16Number(bytes);
    return 0x7FFF != this.value;
  }
  getValueString(){
      return  (this.value/60)+":"+(this.value%60)
  }
  getCommand(){
    let cmd = new timeCommand()
    cmd.address = this.address
    cmd.maxValue = this.maxValue
    cmd.minValue = this.minValue
    cmd.initValue(this.value/60,this.value%60)
    cmd.title = this.title
    return cmd
  }
}
