import parentPowerField from '../../powerField'
export default class powerField extends parentPowerField {
    haveValue(...bytes){
        this.value = this.startIndex
        return true;
    }
}
