import pointField from "./pointField";

export default class commandField extends pointField{
    constructor(address,maxValue,minValue,commandGroupKey){
        super();
        this.address = address;
        this.maxValue = maxValue;
        this.minValue = minValue;
        this.commandGroupKey = commandGroupKey;
    }
    /**
     * 获取写入命令
     */
    getCommand(){
        if(null == this.address || this.address.length<4){
            return null
        }
        const cmd = this.createCommandAndInitValue()
        cmd.address = this.address
        cmd.unit = this.unit
        cmd.title = this.title
        cmd.minValue = this.minValue
        cmd.maxValue = this.maxValue
        return cmd
    }
    createCommandAndInitValue(){}
}
