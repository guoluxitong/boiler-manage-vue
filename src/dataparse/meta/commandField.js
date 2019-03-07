import pointField from "./pointField";

export default class commandField extends pointField{
    constructor(){
        super();
        this.address = "";
        this.maxValue = {};
        this.minValue = {};
        this.commandGroupKey = "";
    }
    /**
     * 获取写入命令
     */
    getCommand(){
        if(null == this.address || this.address.length<4){
            return null
        }
        const cmd = new createCommandAndInitValue()
        cmd.address = this.address
        cmd.unit = this.unit
        cmd.title = this.title
        cmd.minValue = this.minValue
        cmd.maxValue = this.maxValue
        return cmd
    }
    createCommandAndInitValue(){}
}
