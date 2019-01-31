import parentMockField from '../mockField'
import {getUnit32Number, getFloat32Number} from '@/utils/dataparse'
export default class mockField extends parentMockField {
  haveValue(...bytes){
    let value=getUnit32Number(bytes)
    if(0x7FFFFFFF == value){
      return false
    }
    let endValue=getFloat32Number(bytes)
    if(endValue!=0&&endValue.toString().split(".")[1]&&endValue.toString().split(".")[1].length>2){
        endValue=Number(endValue.toString().match(/^\d+(?:\.\d{0,2})?/))
    }
    this.value=endValue
    return true;
  }
}
