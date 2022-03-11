import {
  DateTimeDiffDirt,
  DateTimeDiffType,
  isValidDateTime,
  isDTimeDiffInScope,
  isDTimeDiffInScopeForNow,
  DateTimeDiffOptions,
} from '../lib';

const testCaseArray = [
  {
    testCase: [],
    isValidDateTimeResult: false,
  },
  {
    testCase: '1577923200000',
    isValidDateTimeResult: true,
  },
  {
    testCase: 1577923200000,
    isValidDateTimeResult: true,
  },
  {
    testCase: new Date(),
    isValidDateTimeResult: true,
  },
  {
    testCase: Date.now(),
    isValidDateTimeResult: true,
  },
  {
    testCase: '',
    isValidDateTimeResult: false,
  },
];

for (const index in testCaseArray) {
  const {
    testCase,
    isValidDateTimeResult,
  }: {
    testCase: any;
    isValidDateTimeResult: boolean;
  } = testCaseArray[index];

  test(`ast-function：isValidDateTime ，testCase：${testCase}`, () => {
    expect(isValidDateTime(testCase)).toBe(isValidDateTimeResult);
  });
}

const dTimeDiffTestCaseArray = [
  {
    firstDateTime: 1577923200000,
    lastDateTime: 1577836800000,
    options: {
      type: DateTimeDiffType.Day,
      num: 1,
      dirt: DateTimeDiffDirt.Before,
    },
    isDTimeDiffInScopeResult: true,
  },
  {
    firstDateTime: Date.now(),
    lastDateTime: Date.now() - 2000,
    options: {
      type: DateTimeDiffType.Sec,
      num: 3,
      dirt: DateTimeDiffDirt.Before,
    },
    isDTimeDiffInScopeResult: true,
  },
  {
    firstDateTime: Date.now(),
    lastDateTime: Date.now() + 2000,
    options: {
      type: DateTimeDiffType.Sec,
      num: 3,
      dirt: DateTimeDiffDirt.After,
    },
    isDTimeDiffInScopeResult: true,
  },
  {
    firstDateTime: Date.now(),
    lastDateTime: Date.now() - 24 * 60 * 60 * 1000,
    options: {
      type: DateTimeDiffType.Day,
      num: 1,
      dirt: DateTimeDiffDirt.Before,
    },
    isDTimeDiffInScopeResult: true,
  },
  {
    firstDateTime: Date.now(),
    lastDateTime: Date.now() + 24 * 60 * 60 * 1000,
    options: {
      type: DateTimeDiffType.Day,
      num: 1,
      dirt: DateTimeDiffDirt.After,
    },
    isDTimeDiffInScopeResult: true,
  },
  {
    firstDateTime: Date.now(),
    lastDateTime: Date.now() + 24 * 60 * 60 * 1000,
    options: { type: DateTimeDiffType.Day, num: 1, dirt: DateTimeDiffDirt.All },
    isDTimeDiffInScopeResult: true,
  },
  {
    firstDateTime: Date.now(),
    lastDateTime: Date.now() + 24 * 60 * 60 * 1000,
    options: {
      type: DateTimeDiffType.Hour,
      num: 23,
      dirt: DateTimeDiffDirt.All,
    },
    isDTimeDiffInScopeResult: false,
  },
];

for (const index in dTimeDiffTestCaseArray) {
  const {
    firstDateTime,
    lastDateTime,
    options,
    isDTimeDiffInScopeResult,
  }: {
    firstDateTime: number;
    lastDateTime: number;
    options: DateTimeDiffOptions;
    isDTimeDiffInScopeResult: boolean;
  } = dTimeDiffTestCaseArray[index];

  test(`ast-function：isValidDateTime，firstDateTime：${firstDateTime}，lastDateTime：${lastDateTime}，options：${JSON.stringify(
    options,
  )}`, () => {
    expect(isDTimeDiffInScope(firstDateTime, lastDateTime, options)).toBe(
      isDTimeDiffInScopeResult,
    );
  });
}

const dTimeDiffForNowTestCaseArray = [
  {
    dateTime: Date.now() - 2000,
    options: {
      type: DateTimeDiffType.Sec,
      num: 3,
      dirt: DateTimeDiffDirt.Before,
    },
    isDTimeDiffInScopeForNowResult: true,
  },
  {
    dateTime: Date.now() + 2000,
    options: {
      type: DateTimeDiffType.Sec,
      num: 3,
      dirt: DateTimeDiffDirt.After,
    },
    isDTimeDiffInScopeForNowResult: true,
  },
  {
    dateTime: Date.now() - 24 * 60 * 60 * 1000,
    options: {
      type: DateTimeDiffType.Day,
      num: 2,
      dirt: DateTimeDiffDirt.Before,
    },
    isDTimeDiffInScopeForNowResult: true,
  },
  {
    dateTime: Date.now() + 24 * 60 * 60 * 1000,
    options: {
      type: DateTimeDiffType.Day,
      num: 1,
      dirt: DateTimeDiffDirt.After,
    },
    isDTimeDiffInScopeForNowResult: true,
  },
  {
    dateTime: Date.now() + 24 * 60 * 60 * 1000,
    options: { type: DateTimeDiffType.Day, num: 1, dirt: DateTimeDiffDirt.All },
    isDTimeDiffInScopeForNowResult: true,
  },
  {
    dateTime: Date.now() + 24 * 60 * 60 * 1000,
    options: {
      type: DateTimeDiffType.Hour,
      num: 23,
      dirt: DateTimeDiffDirt.All,
    },
    isDTimeDiffInScopeForNowResult: false,
  },
];

for (const index in dTimeDiffForNowTestCaseArray) {
  const {
    dateTime,
    options,
    isDTimeDiffInScopeForNowResult,
  }: {
    dateTime: number;
    options: DateTimeDiffOptions;
    isDTimeDiffInScopeForNowResult: boolean;
  } = dTimeDiffForNowTestCaseArray[index];

  test(`ast-function：isValidDateTime，dateTime：${dateTime}，options：${JSON.stringify(
    options,
  )}`, () => {
    expect(isDTimeDiffInScopeForNow(dateTime, options)).toBe(
      isDTimeDiffInScopeForNowResult,
    );
  });
}
