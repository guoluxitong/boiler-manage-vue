import parentMockField from '../mockField'
import {getInt16Number} from '@/utils/dataparse'
export default class mockField extends parentMockField {
  haveValue(...bytes){
    this.value=getInt16Number(bytes)
    return true
  }
}
