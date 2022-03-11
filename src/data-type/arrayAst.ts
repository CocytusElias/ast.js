import { EmelemtType } from '../index';
import { isSameObject } from './objectAst';

/***
 * @description 校验是数组
 * @param { any } value - 被校验的值
 * @return { boolean } 数组为true，否则为false
 */
export function isArray(value: any) {
  return Array.isArray(value);
}

/***
 * @description 校验不是空数组
 * @param { any } value - 被校验的值
 * @return { boolean } 非空数组为true，否则为false
 */
export function noEmpArray(value: any) {
  return isArray(value) && Boolean(value.length);
}

/***
 * @description 校验是空数组
 * @param { any } value - 被校验的值
 * @return { boolean } 空数组为true，否则为false
 */
export function isEmpArray(value: any) {
  return isArray(value) && !Boolean(value.length);
}

/***
 * @description 校验两个数组是否相等
 * @param { any } firstArray - 第一个被比较的值
 * @param { any } secondArray - 第二个被比较的值
 * @return { boolean } 两个数组相同为true，否则为false
 */
export function isSameArray(firstArray: any, secondArray: any) {
  if (!isArray(firstArray) || !isArray(secondArray)) {
    return false;
  }

  if (isEmpArray(firstArray) && isEmpArray(secondArray)) {
    return true;
  }

  if (firstArray.length !== secondArray.length) {
    return false;
  }

  for (let i = 0; i < firstArray.length; i++) {
    if (
      Object.prototype.toString.call(firstArray[i]) !==
      Object.prototype.toString.call(secondArray[i])
    ) {
      return false;
    }

    const elementType = Object.prototype.toString.call(firstArray[i]);

    if (
      elementType === EmelemtType.number ||
      elementType === EmelemtType.string ||
      elementType === EmelemtType.boolean
    ) {
      if (firstArray[i] !== secondArray[i]) {
        return false;
      }
    } else if (elementType === EmelemtType.array) {
      if (!isSameArray(firstArray[i], secondArray[i])) {
        return false;
      }
    } else if (elementType === EmelemtType.object) {
      if (!isSameObject(firstArray[i], secondArray[i])) {
        return false;
      }
    } else if (elementType === EmelemtType.function) {
      // eslint-disable-next-line @typescript-eslint/ban-types
      const firstValue: ()=>void = firstArray[i];
      // eslint-disable-next-line @typescript-eslint/ban-types
      const secondValue: ()=>void = secondArray[i];
      if (firstValue.name !== secondValue.name) {
        return false;
      }
    }
  }
  return true;
}
