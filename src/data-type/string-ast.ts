/***
 * @description 校验是字符串
 * @param { any } value - 被校验的值
 * @return { boolean } 是字符串为 true，反之为 false
 */
import { isArray } from './array-ast';
import { isObject } from './object-ast';

export function isString(value: any) {
  return typeof value === 'string';
}

/***
 * @description 校验是空字符串
 * @param { any } value - 被校验的值
 * @return { boolean } 仅在是空字符串时为 true
 */
export function isEmptyString(value: any) {
  return isString(value) && !value.length;
}

/***
 * @description 校验是非空字符串
 * @param { any } value - 被校验的值
 * @return { boolean } 仅在是非空字符串时为 true
 */
export function noEmptyString(value: any) {
  return isString(value) && value.length;
}

/***
 * @description 校验是可被解析的字符串
 * @param { any } value - 被校验的值
 * @return { boolean } 仅在是可被解析的字符串时为 true
 */
export function isCanParseString(value: any) {
  try {
    return noEmptyString(value) && JSON.parse(value);
  } catch (e) {
    return false;
  }
}

/***
 * @description 校验是可被解析为 array 的字符串
 * @param { any } value - 被校验的值
 * @return { boolean } 仅在字符串可被解析为 array 时为 true
 */
export function isArrayString(value: any) {
  try {
    return noEmptyString(value) && isArray(JSON.parse(value));
  } catch (e) {
    return false;
  }
}

/***
 * @description 校验是可被解析为 object 的字符串
 * @param { any } value - 被校验的值
 * @return { boolean } 仅在字符串可被解析为 object 时为 true
 */
export function isObjectString(value: any) {
  try {
    return noEmptyString(value) && isObject(JSON.parse(value));
  } catch (e) {
    return false;
  }
}
