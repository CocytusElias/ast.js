import { EmelemtType } from '../index';
import { isSameObject } from './object';

/***
 * @description 校验是数组
 * @param { [] } value - 被校验的值
 * @return { boolean } 数组为true，否则为false
 */
export function isArray(value: []) {
  return Object.prototype.toString.call(value) === EmelemtType.array;
}

/***
 * @description 校验不是空数组
 * @param { [] } value - 被校验的值
 * @return { boolean } 非空数组为true，否则为false
 */
export function noEmpArray(value: []) {
  return isArray(value) && value.length > 0;
}

/***
 * @description 校验是空数组
 * @param { [] } value - 被校验的值
 * @return { boolean } 空数组为true，否则为false
 */
export function isEmpArray(value: []) {
  return isArray(value) && value.length === 0;
}

/***
 * @description 校验两个数组是否相等
 * @param { [] } valueFirst - 第一个被比较的值
 * @param { [] } valueSecond - 第二个被比较的值
 * @return { boolean } 两个数组相同为true，否则为false
 */
export function isSameArray(valueFirst: [], valueSecond: []) {
  if (isEmpArray(valueFirst) && isEmpArray(valueSecond)) {
    return true;
  }

  if (valueFirst.length !== valueSecond.length) {
    return false;
  }

  for (let i = 0; i < valueFirst.length; i++) {
    if (
      Object.prototype.toString.call(valueFirst[i]) !==
      Object.prototype.toString.call(valueSecond[i])
    ) {
      return false;
    }

    const elementType = Object.prototype.toString.call(valueFirst[i]);

    if (
      elementType === EmelemtType.number ||
      elementType === EmelemtType.string ||
      elementType === EmelemtType.boolean
    ) {
      if (valueFirst[i] !== valueSecond[i]) {
        return false;
      }
    } else if (elementType === EmelemtType.array) {
      if (!isSameArray(valueFirst[i], valueSecond[i])) {
        return false;
      }
    } else if (elementType === EmelemtType.object) {
      if (!isSameObject(valueFirst[i], valueSecond[i])) {
        return false;
      }
    } else if (elementType === EmelemtType.function) {
      // TODO: function对比
    }
  }
  return true;
}
