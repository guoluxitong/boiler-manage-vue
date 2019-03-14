import parentStartStopField from '../startStopField'
import {getInt16Number} from '../../../utils/dataparse'
import timeCommand from '../../entity/timeCommand'
export default class startStopField extends parentStartStopField {
  haveValue(...bytes){
    this.value=getInt16Number(bytes);
    return 0x7FFF != this.value;
  }
  getValueString(){
    let h = parseInt(this.value/60)
    let m = this.value%60
      return  ((h>9)?h:("0" + h))+":"+((m>9)?m:("0"+m))
  }
  getCommand(){
    let cmd = new timeCommand()
    cmd.address = this.address
    cmd.maxValue = this.maxValue
    cmd.minValue = this.minValue
    cmd.initValue(parseInt(this.value/60),this.value%60)
    cmd.title = this.title
    return cmd
  }
}
