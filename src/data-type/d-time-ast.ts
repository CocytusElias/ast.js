import { isInt, isPositiveInt } from './number-ast';
import { isString } from './string-ast';

export enum DateTimeDiffType {
  Sec = 'sec',
  Min = 'min',
  Hour = 'hour',
  Day = 'day',
  Month = 'month',
  Year = 'year',
}

export enum DateTimeDiffDirt {
  Before = 'before',
  After = 'after',
  All = 'all',
}

export interface DateTimeDiffOptions {
  type: DateTimeDiffType;
  num: number;
  dirt: DateTimeDiffDirt;
}

function convert(value: any) {
  if (isString(value) && isInt(value)) {
    value = parseInt(value);
  }
  return value;
}

/***
 * @description 校验是一个有效的时间
 * @param { any } value - 被校验的值
 * @return { boolean } 仅在字符串可被解析为 object 时为 true
 */
export function isValidDateTime(value: any) {
  value = convert(value);
  return !isNaN(new Date(value).getTime());
}

/***
 * @description 校验两个时间的偏差值在指定时间内，整个校验是判断 lastDateTime 是否在 firstDateTime 的差值范围内。
 *              比如 options 为 { type: "hour", num: 1, dirt: "before"} 时，校验的是 lastDateTime 是否在 【firstDateTime - 1h】到 【firstDateTime】 之间这个范围内。
 * @param { any } firstDateTime - 被校验的值, 这个是基准时间。
 * @param { any } lastDateTime - 被校验的值, 这个是比较时间。
 * @param { DateTimeDiffOptions } options - 校验选项
 * @return { boolean } 仅在两个时间的偏差值在指定时间内为 true
 */
export function isDTimeDiffInScope(
  firstDateTime: any,
  lastDateTime: any,
  options: DateTimeDiffOptions,
) {
  firstDateTime = convert(firstDateTime);
  lastDateTime = convert(lastDateTime);

  const { num, type, dirt } = options;
  const lastTimeStamp = new Date(lastDateTime).getTime();
  let diffTimeStamp = 0;
  let startTimeStamp = new Date(firstDateTime).getTime();
  let endTimeStamp = new Date(firstDateTime).getTime();

  if (
    !isValidDateTime(firstDateTime) ||
    !isValidDateTime(lastTimeStamp) ||
    !(isPositiveInt(num) && num <= 100)
  ) {
    return false;
  }

  switch (type) {
    case DateTimeDiffType.Sec:
      diffTimeStamp = num * 1000;
      break;
    case DateTimeDiffType.Min:
      diffTimeStamp = num * 6000;
      break;
    case DateTimeDiffType.Hour:
      diffTimeStamp = num * 3600000;
      break;
    case DateTimeDiffType.Day:
      diffTimeStamp = num * 86400000;
      break;
    case DateTimeDiffType.Month:
      diffTimeStamp = num * 2592000000;
      break;
    case DateTimeDiffType.Year:
      diffTimeStamp = num * 946080000000;
      break;
    default:
      return false;
  }

  switch (dirt) {
    case DateTimeDiffDirt.Before:
      startTimeStamp -= diffTimeStamp;
      break;
    case DateTimeDiffDirt.After:
      endTimeStamp += diffTimeStamp;
      break;
    case DateTimeDiffDirt.All:
      startTimeStamp -= diffTimeStamp;
      endTimeStamp += diffTimeStamp;
      break;
    default:
      return false;
  }

  return lastTimeStamp >= startTimeStamp && lastTimeStamp <= endTimeStamp;
}

/***
 * @description 校验时间的与当前时间的偏差值在指定时间内。
 * @param { any } dateTime - 被校验的值。
 * @param { DateTimeDiffOptions } options - 校验选项
 * @return { boolean } 仅在两个时间的偏差值在指定时间内为 true
 */
export function isDTimeDiffInScopeForNow(
  dateTime: any,
  options: DateTimeDiffOptions,
) {
  return isDTimeDiffInScope(Date.now(), dateTime, options);
}
