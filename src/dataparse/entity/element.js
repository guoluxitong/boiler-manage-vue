export default class element {
    static prefix_stove = "a"
    static prefix_beng = "b"
    static prefix_fan = "c"

    static index_a_power=0

    static index_beng_count=0
    static index_fan_count=0
    constructor(title,prefix){
        this.title=title
        this.prefix=prefix
        this.values=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]
    }
    setValues(destPos=0,...data){
        for (let index in data){
            this.values[parseInt(destPos+index)]=data[index]
        }
    }
    GetElementPrefixAndValuesString() {
        let sb = "".concat(this.prefix)
        for (let value of this.values){
            if(value>-1){
                sb=sb.concat("-").concat(value)
                continue
            }
            break
        }
        return sb
    }

}