import parentByteField from '../../byteField';
export default class byteField extends parentByteField {
    init() {
        arguments[0].name=arguments[1]
        arguments[0].startIndex=arguments[2]
        arguments[0].byteLength=arguments[3]
        arguments[0].title=arguments[4]
        switch (arguments.length){
            case 6:
                if(typeof arguments[5] =='number'){
                    arguments[0].bit=arguments[5]
                }else if(typeof arguments[5] =='object'){
                    arguments[0].valueMap=arguments[5]
                }else if(typeof arguments[5] =='boolean'){
                    arguments[0].isShow=arguments[5]
                }else if(typeof arguments[5] =='string'){
                    arguments[0].unit=arguments[5]
                }
                break;
            case 7:
                if(typeof arguments[6] =='object'){
                    arguments[0].valueMap=arguments[6]
                    arguments[0].bit=arguments[5]
                }else if(typeof arguments[6] =='string'){
                    arguments[0].unit=arguments[6]
                    arguments[0].baseNumber=arguments[5]
                }
                break;
        }
        return arguments[0]
    }
}