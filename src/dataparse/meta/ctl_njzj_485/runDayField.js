import parentBaseInfoField from '../baseInfoField'
export default class runDayField extends parentBaseInfoField {
  haveValue(...bytes){
    return false
  }
}
