import parentMockField from '../mockField'
import {getInt16Number} from '@/utils/dataparse'
export default class mockField extends parentMockField {
  haveValue(...bytes){
    let i=getInt16Number(bytes);
    if(0x7FFF ==  i)
      return false;
    if(this.baseNumber>0){
      this.value = i/this.baseNumber
    }else{
      this.value=i
    }
    return true
  }
}
