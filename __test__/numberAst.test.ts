import {
  isDecimal,
  isInt,
  isNegativeDecimal,
  isNegativeInt,
  isPositiveDecimal,
  isPositiveInt,
  isSpecifyPrecisionDecimal,
} from '../lib';

// ------ Int ------

const intTestCase = [
  { testCase: 1, result: true },
  { testCase: '12', result: true },
  { testCase: '78969878977777', result: true },
  { testCase: 6654, result: true },
  { testCase: '1.1', result: false },
  { testCase: -1441, result: true },
  { testCase: -12.1, result: false },
  { testCase: '-12.1', result: false },
  { testCase: '-12', result: true },
  { testCase: '-', result: false },
  { testCase: 'yuo', result: false },
  { testCase: 'name', result: false },
  { testCase: '?', result: false },
  { testCase: '', result: false },
];

for (const index in intTestCase) {
  const { testCase, result }: { testCase: number | string; result: boolean } =
    intTestCase[index];
  test(`ast-function：isInt ，testCase：${testCase}`, () => {
    expect(isInt(testCase)).toBe(result);
  });
}

const negativeIntTestCase = [
  { testCase: 1, result: false },
  { testCase: '12', result: false },
  { testCase: '78969878977777', result: false },
  { testCase: 6654, result: false },
  { testCase: '1.1', result: false },
  { testCase: -1441, result: true },
  { testCase: -12.1, result: false },
  { testCase: '-12.1', result: false },
  { testCase: '-12', result: true },
  { testCase: '-', result: false },
  { testCase: 'yuo', result: false },
  { testCase: 'name', result: false },
  { testCase: '?', result: false },
  { testCase: '', result: false },
];

for (const index in negativeIntTestCase) {
  const { testCase, result }: { testCase: number | string; result: boolean } =
    negativeIntTestCase[index];
  test(`ast-function：isNegativeInt ，testCase：${testCase}`, () => {
    expect(isNegativeInt(testCase)).toBe(result);
  });
}

const positiveIntTestCase = [
  { testCase: 1, result: true },
  { testCase: '12', result: true },
  { testCase: '78969878977777', result: true },
  { testCase: 6654, result: true },
  { testCase: '1.1', result: false },
  { testCase: -1441, result: false },
  { testCase: -12.1, result: false },
  { testCase: '-12.1', result: false },
  { testCase: '-12', result: false },
  { testCase: '-', result: false },
  { testCase: 'yuo', result: false },
  { testCase: 'name', result: false },
  { testCase: '?', result: false },
  { testCase: '', result: false },
];

for (const index in positiveIntTestCase) {
  const { testCase, result }: { testCase: number | string; result: boolean } =
    positiveIntTestCase[index];
  test(`ast-function：isPositiveInt ，testCase：${testCase}`, () => {
    expect(isPositiveInt(testCase)).toBe(result);
  });
}

// ------ Int ------

const decimalTestCase = [
  { testCase: 1, result: false },
  { testCase: '12', result: false },
  { testCase: '78969878977777', result: false },
  { testCase: 6654, result: false },
  { testCase: '1.1', result: true },
  { testCase: -1441, result: false },
  { testCase: -12.1, result: true },
  { testCase: '-12.1', result: true },
  { testCase: '-12', result: false },
  { testCase: '-', result: false },
  { testCase: 'yuo', result: false },
  { testCase: 'name', result: false },
  { testCase: '?', result: false },
  { testCase: '', result: false },
];

for (const index in decimalTestCase) {
  const { testCase, result }: { testCase: number | string; result: boolean } =
    decimalTestCase[index];
  test(`ast-function：isDecimal ，testCase：${testCase}`, () => {
    expect(isDecimal(testCase)).toBe(result);
  });
}

const negativeDecimalTestCase = [
  { testCase: 1, result: false },
  { testCase: '12', result: false },
  { testCase: '78969878977777', result: false },
  { testCase: 6654, result: false },
  { testCase: '1.1', result: false },
  { testCase: 3.3, result: false },
  { testCase: -1441, result: false },
  { testCase: -12.1, result: true },
  { testCase: '-12.1', result: true },
  { testCase: '-12', result: false },
  { testCase: '-', result: false },
  { testCase: 'yuo', result: false },
  { testCase: 'name', result: false },
  { testCase: '?', result: false },
  { testCase: '', result: false },

];

for (const index in negativeDecimalTestCase) {
  const { testCase, result }: { testCase: number | string; result: boolean } =
    negativeDecimalTestCase[index];
  test(`ast-function：isNegativeDecimal ，testCase：${testCase}`, () => {
    expect(isNegativeDecimal(testCase)).toBe(result);
  });
}

const positiveDecimalTestCase = [
  { testCase: 1, result: false },
  { testCase: '12', result: false },
  { testCase: '78969878977777', result: false },
  { testCase: 6654, result: false },
  { testCase: '1.1', result: true },
  { testCase: 3.3, result: true },
  { testCase: -1441, result: false },
  { testCase: -12.1, result: false },
  { testCase: '-12.1', result: false },
  { testCase: '-12', result: false },
  { testCase: '-', result: false },
  { testCase: 'yuo', result: false },
  { testCase: 'name', result: false },
  { testCase: '?', result: false },
  { testCase: '', result: false },
];

for (const index in positiveDecimalTestCase) {
  const { testCase, result }: { testCase: number | string; result: boolean } =
    positiveDecimalTestCase[index];
  test(`ast-function：isPositiveDecimal ，testCase：${testCase}`, () => {
    expect(isPositiveDecimal(testCase)).toBe(result);
  });
}

const isIntTestCase = [
  { testCase: 1, result: false },
  { testCase: '12', result: false },
  { testCase: '78969878977777', result: false },
  { testCase: 6654, result: false },
  { testCase: '1.1', result: false },
  { testCase: -1441, result: false },
  { testCase: -12.1, result: false },
  { testCase: '-12.1', result: false },
  { testCase: '-12', result: false },
  { testCase: '-12.22', result: true },
  { testCase: '-696.36', result: true },
  { testCase: '-88965.00', result: true },
  { testCase: 1268.36, result: true },
  { testCase: 999999.0, result: false },
  { testCase: '999999.00', result: true },
  { testCase: '-694456455456.36', result: false },
  { testCase: '-96445.365', result: false },
  { testCase: '-', result: false },
  { testCase: 'yuo', result: false },
  { testCase: 'name', result: false },
  { testCase: '?', result: false },
  { testCase: '', result: false },
];

for (const index in isIntTestCase) {
  const { testCase, result }: { testCase: number | string; result: boolean } =
    isIntTestCase[index];
  test(`ast-function：isSpecifyPrecisionDecimal ，testCase：${testCase}`, () => {
    expect(isSpecifyPrecisionDecimal(testCase, 10, 2)).toBe(result);
  });
}
