import { EmelemtType } from '../index';
import { isSameArray } from './arrayAst';

/***
 * @description 校验是Object
 * @param { object } value - 被校验的值
 * @return { boolean } OBJECT为true，否则为false
 */
export function isObject(value: object) {
  return Object.prototype.toString.call(value) === EmelemtType.object;
}

/***
 * @description 校验不是空Object
 * @param { object } value - 被校验的值
 * @return { boolean } 非空OBJECT为true，否则为false
 */
export function noEmpObject(value: object) {
  return isObject(value) && Object.keys(value).length > 0;
}

/***
 * @description 校验是空Object
 * @param { object } value - 被校验的值
 * @return { boolean } 空OBJECT为true，否则为false
 */
export function isEmpObject(value: object) {
  return isObject(value) && Object.keys(value).length === 0;
}

/***
 * @description 校验两个Object是否相等
 * @param { { [index: string]: any } } firstObject - 第一个被比较的值
 * @param { { [index: string]: any } } secondObject - 第二个被比较的值
 * @return { boolean } 两个Object相同为true，否则为false
 */
export function isSameObject(
  firstObject: { [index: string]: any },
  secondObject: { [index: string]: any },
) {
  if (!isObject(firstObject) || !isObject(secondObject)) {
    return false;
  }

  if (isEmpObject(firstObject) && isEmpObject(secondObject)) {
    return true;
  }

  const firstObjectKeys: string[] = Object.keys(firstObject);
  const secondObjectKeys: string[] = Object.keys(secondObject);
  const firstObjectLength: number = firstObjectKeys.length;
  const secondObjectLength: number = secondObjectKeys.length;

  if (secondObjectLength !== firstObjectLength) {
    return false;
  }

  firstObjectKeys.sort();
  secondObjectKeys.sort();

  for (let i = 0; i < firstObjectLength; ++i) {
    if (firstObjectKeys[i] !== secondObjectKeys[i]) {
      return false;
    }

    const firstObjectvalue: any = firstObject[firstObjectKeys[i]];
    const secondObjectvalue: any = secondObject[secondObjectKeys[i]];

    if (
      Object.prototype.toString.call(firstObjectvalue) !==
      Object.prototype.toString.call(secondObjectvalue)
    ) {
      return false;
    }

    const elementType = Object.prototype.toString.call(firstObjectvalue);

    if (
      elementType === EmelemtType.number ||
      elementType === EmelemtType.string ||
      elementType === EmelemtType.boolean
    ) {
      if (firstObjectvalue !== secondObjectvalue) {
        return false;
      }
    } else if (elementType === EmelemtType.array) {
      if (!isSameArray(firstObjectvalue, secondObjectvalue)) {
        return false;
      }
    } else if (elementType === EmelemtType.object) {
      if (!isSameObject(firstObjectvalue, secondObjectvalue)) {
        return false;
      }
    } else if (elementType === EmelemtType.function) {
      if (firstObjectvalue.name !== secondObjectvalue.name) {
        return false;
      }
    }
  }
  return true;
}
