import parentPowerField from '../powerField'
export default class powerField extends parentPowerField {
  haveValue(){
    this.value=this.startIndex
    return true
  }
}
