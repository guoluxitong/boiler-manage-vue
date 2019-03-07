import parentMediaField from '../mediaField'
export default class mediaField extends parentMediaField {
  haveValue(){
    this.value=this.startIndex
    return true
  }
}
