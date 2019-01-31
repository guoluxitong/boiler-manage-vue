import parentDeviceField from '../deviceField'
export default class deviceField extends parentDeviceField {
    haveValue(...bytes) {
        this.value = ((bytes[0] & 0xFF) << 8) | (bytes[1] & 0xFF);
        let i = 1 << this.bit;
        if ((i & this.value) == i) {
            this.value = 1;
        } else {
            this.value = 0;
        }
        return true;
    }
    getValueString() {
        if (JSON.stringify(this.valueMap) != '{}') {
            return this.valueMap[this.value]
        } else {
            return super.getValueString()
        }
    }
}
