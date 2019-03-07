export default class deviceFieldForUI {
  constructor() {
    this.name = ''
    this.value=''
    this.key=''
    this.title=''
    this.valueString=''
    this.unit = ''
    this.needFormat = false    
  }
  getValueString(){
    if(this.needFormat){
      return String.format(this.valueString,this.value)
    }
    return this.valueString
  }
}
