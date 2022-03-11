/***
 * @description 校验是整型
 * @param { any } value - 被校验的值
 * @return { boolean } 整型为true，否则为false
 */
export function isInt(value: any) {
  if (typeof value === 'string') {
    return String(parseInt(value)) === String(value) && !isNaN(parseInt(value));
  } else {
    return String(Math.floor(value)) === String(value);
  }
}

/***
 * @description 校验是正整型
 * @param { any } value - 被校验的值
 * @return { boolean } 正整型为true，否则为false
 */
export function isPositiveInt(value: any) {
  return isInt(value) && value > 0;
}

/***
 * @description 校验是负整型
 * @param { any } value - 被校验的值
 * @return { boolean } 负整型为true，否则为false
 */
export function isNegativeInt(value: any) {
  return isInt(value) && value < 0;
}

/***
 * @description 校验是小数
 * @param { any } value - 被校验的值
 * @return { boolean } 是指定精度的小数为true，否则为false
 */
export function isDecimal(value: any) {
  const valueStr = String(value);
  const [integer, decimal] = valueStr.split('.');
  return `${integer}.${decimal}` === valueStr && isInt(parseInt(integer));
}

/***
 * @description 校验是正小数
 * @param { any } value - 被校验的值
 * @return { boolean } 正小数为true，否则为false
 */
export function isPositiveDecimal(value: any) {
  return isDecimal(value) && value > 0;
}

/***
 * @description 校验是负小数
 * @param { any } value - 被校验的值
 * @return { boolean } 负小数为true，否则为false
 */
export function isNegativeDecimal(value: any) {
  return isDecimal(value) && value < 0;
}

/***
 * @description 校验是指定精度的小数
 * @param { any } value - 被校验的值
 * @param { number } precision - 精度
 * @param { number } scale - 小数位数
 * @return { boolean } 是指定精度的小数为true，否则为false
 */
export function isSpecifyPrecisionDecimal(
  value: any,
  precision: number,
  scale: number,
) {
  const valueStr = String(value);
  const [, decimal] = valueStr.split('.');
  return (
    isDecimal(value) &&
    decimal.length === scale &&
    valueStr.length - 1 <= precision
  );
}
