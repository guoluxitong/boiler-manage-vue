import parentMediaField from '../../mediaField'
export default class mediaField extends parentMediaField {
    haveValue(...bytes){
        this.value = this.startIndex
        return true;
    }
}
