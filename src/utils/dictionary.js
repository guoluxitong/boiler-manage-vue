import {getDictionaryValueListByType} from '@/api/dictionaryValue'

/**
 * 通过类型获得字典值
 * @param type
 * @returns {PromiseLike<T> | Promise<T> | *}
 */
export default function initDictionary(type) {
  return getDictionaryValueListByType(type).then(response => {
    let data=response.data.data;
    return data
  })
}

