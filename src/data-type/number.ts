/***
 * @description 校验是整型
 * @param { number } value - 被校验的值
 * @return { boolean } 整型为true，否则为false
 */
export function isInt(value: number) {
  return Math.floor(value) === value;
}

/***
 * @description 校验是正整型
 * @param { number } value - 被校验的值
 * @return { boolean } 正整型为true，否则为false
 */
export function isPositiveInt(value: number) {
  return isInt(value) && value > 0;
}

/***
 * @description 校验是负整型
 * @param { number } value - 被校验的值
 * @return { boolean } 负整型为true，否则为false
 */
export function isNegativeInt(value: number) {
  return isInt(value) && value < 0;
}

/***
 * @description 校验是小数
 * @param { value } value - 被校验的值
 * @return { boolean } 是指定精度的小数为true，否则为false
 */
export function isDecimals(value: number) {
  const valueStr: string = String(value);
  const [integer, decimal] = valueStr.split('.');
  return `${integer}.${decimal}` === valueStr && isInt(parseInt(integer));
}

/***
 * @description 校验是指定精度的小数
 * @param { number } value - 被校验的值
 * @param { number } precision - 精度
 * @param { number } scale - 小数位数
 * @return { boolean } 是指定精度的小数为true，否则为false
 */
export function isDecimals1(value: number, precision: number, scale: number) {
  const valueStr: string = String(value);
  const [, decimal] = valueStr.split('.');
  return (
    isDecimals(value) &&
    decimal.length === scale &&
    valueStr.length - 1 === precision
  );
}
