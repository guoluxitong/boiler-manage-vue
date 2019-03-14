import baseInfoField from './baseInfoField'
import systemCommand from '../../entity/systemCommand'

export default class systemStatusField extends baseInfoField{
  getCommand(){
    let cmd = new systemCommand()
    cmd.address = this.address
    cmd.maxValue = this.maxValue
    cmd.minValue = this.minValue
    cmd.initValue(this.value)
    cmd.title = this.title
    return cmd
  }
}
