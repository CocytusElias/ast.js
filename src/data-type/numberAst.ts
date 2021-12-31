/***
 * @description 校验是整型
 * @param { number | string } value - 被校验的值
 * @return { boolean } 整型为true，否则为false
 */
export function isInt(value: number | string) {
  if (typeof value === 'string') {
    return String(parseInt(value)) === String(value) && !isNaN(parseInt(value));
  } else {
    return String(Math.floor(value)) === String(value);
  }
}

/***
 * @description 校验是正整型
 * @param { number | string } value - 被校验的值
 * @return { boolean } 正整型为true，否则为false
 */
export function isPositiveInt(value: number | string) {
  return isInt(value) && value > 0;
}

/***
 * @description 校验是负整型
 * @param { number | string } value - 被校验的值
 * @return { boolean } 负整型为true，否则为false
 */
export function isNegativeInt(value: number | string) {
  return isInt(value) && value < 0;
}

/***
 * @description 校验是小数
 * @param { number | string } value - 被校验的值
 * @return { boolean } 是指定精度的小数为true，否则为false
 */
export function isDecimal(value: number | string) {
  const valueStr: string = String(value);
  const [integer, decimal] = valueStr.split('.');
  return `${integer}.${decimal}` === valueStr && isInt(parseInt(integer));
}

/***
 * @description 校验是指定精度的小数
 * @param { number | string } value - 被校验的值
 * @param { number } precision - 精度
 * @param { number } scale - 小数位数
 * @return { boolean } 是指定精度的小数为true，否则为false
 */
export function isSpecifyPrecisionDecimal(
  value: number | string,
  precision: number,
  scale: number,
) {
  const valueStr: string = String(value);
  const [, decimal] = valueStr.split('.');
  return (
    isDecimal(value) &&
    decimal.length === scale &&
    valueStr.length - 1 === precision
  );
}
