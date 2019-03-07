import intCommand from './intCommand'
import command from './command';

export default class openCloseCommand extends intCommand{
    constructor(){
        super()
        this.valueType = command.open_close_value
        this.maxValue = 1
        this.minValue = 0
        this.valueIsSet = true
    }
    handleValue(...values){
        let i = Number.parseInt(values[0])
        if(i>0){
            super.handleValue(i)
        }else{
            super.handleValue(0)
        }
    }
}