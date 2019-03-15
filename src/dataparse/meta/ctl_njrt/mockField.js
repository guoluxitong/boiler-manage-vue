import parentMockField from '../mockField'
import {getInt16Number} from '../../../utils/dataparse'
export default class mockField extends parentMockField {
  haveValue(...bytes){
    let i = getInt16Number(bytes)
    if(this.baseNumber > 0){
      this.value  = Math.abs(i / this.baseNumber)
    }else{
      this.value = Math.abs(i)
    }
    return true
  }
}
