import {
  isString,
  isEmptyString,
  noEmptyString,
  isCanParseString,
  isArrayString,
  isObjectString,
} from '../lib';

const testCaseArray = [
  {
    testCase: [],
    isStringResult: false,
    isEmptyStringResult: false,
    noEmptyStringResult: false,
    isCanParseStringResult: false,
    isArrayStringResult: false,
    isObjectStringResult: false,
  },
  {
    testCase: '[]',
    isStringResult: true,
    isEmptyStringResult: false,
    noEmptyStringResult: true,
    isCanParseStringResult: true,
    isArrayStringResult: true,
    isObjectStringResult: false,
  },
  {
    testCase: '{}',
    isStringResult: true,
    isEmptyStringResult: false,
    noEmptyStringResult: true,
    isCanParseStringResult: true,
    isArrayStringResult: false,
    isObjectStringResult: true,
  },
  {
    testCase: '[1,2,3]',
    isStringResult: true,
    isEmptyStringResult: false,
    noEmptyStringResult: true,
    isCanParseStringResult: true,
    isArrayStringResult: true,
    isObjectStringResult: false,
  },
  {
    testCase: '{asd}',
    isStringResult: true,
    isEmptyStringResult: false,
    noEmptyStringResult: true,
    isCanParseStringResult: false,
    isArrayStringResult: false,
    isObjectStringResult: false,
  },
  {
    testCase: '[{}]',
    isStringResult: true,
    isEmptyStringResult: false,
    noEmptyStringResult: true,
    isCanParseStringResult: true,
    isArrayStringResult: true,
    isObjectStringResult: false,
  },
  {
    testCase: '',
    isStringResult: true,
    isEmptyStringResult: true,
    noEmptyStringResult: false,
    isCanParseStringResult: false,
    isArrayStringResult: false,
    isObjectStringResult: false,
  },
];

for (const index in testCaseArray) {
  const {
    testCase,
    isStringResult,
    isEmptyStringResult,
    noEmptyStringResult,
    isCanParseStringResult,
    isArrayStringResult,
    isObjectStringResult,
  }: {
    testCase: any;
    isStringResult: boolean;
    isEmptyStringResult: boolean;
    noEmptyStringResult: boolean;
    isCanParseStringResult: boolean;
    isArrayStringResult: boolean;
    isObjectStringResult: boolean;
  } = testCaseArray[index];

  test(`ast-function：isString ，testCase：${testCase}`, () => {
    expect(isString(testCase)).toBe(isStringResult);
  });

  test(`ast-function：isEmptyString ，testCase：${testCase}`, () => {
    expect(isEmptyString(testCase)).toBe(isEmptyStringResult);
  });

  test(`ast-function：noEmptyString ，testCase：${testCase}`, () => {
    expect(noEmptyString(testCase)).toBe(noEmptyStringResult);
  });

  test(`ast-function：isCanParseStringResult ，testCase：${testCase}`, () => {
    expect(isCanParseString(testCase)).toBe(isCanParseStringResult);
  });

  test(`ast-function：isArrayString ，testCase：${testCase}`, () => {
    expect(isArrayString(testCase)).toBe(isArrayStringResult);
  });

  test(`ast-function：isObjectString ，testCase：${testCase}`, () => {
    expect(isObjectString(testCase)).toBe(isObjectStringResult);
  });
}
