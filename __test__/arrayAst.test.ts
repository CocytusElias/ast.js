import { isArray, isEmpArray, noEmpArray, isSameArray } from '../src';

const testCaseArray = [
  {
    testCase: [],
    isArrayResult: true,
    isEmpArrayResult: true,
    noEmpArrayResult: false,
  },
  {
    testCase: '[]',
    isArrayResult: false,
    isEmpArrayResult: false,
    noEmpArrayResult: false,
  },
  {
    testCase: '{}',
    isArrayResult: false,
    isEmpArrayResult: false,
    noEmpArrayResult: false,
  },
  {
    testCase: '[1,2,3]',
    isArrayResult: false,
    isEmpArrayResult: false,
    noEmpArrayResult: false,
  },
  {
    testCase: [1, 2, 3],
    isArrayResult: true,
    isEmpArrayResult: false,
    noEmpArrayResult: true,
  },
  {
    testCase: {},
    isArrayResult: false,
    isEmpArrayResult: false,
    noEmpArrayResult: false,
  },
  {
    testCase: {},
    isArrayResult: false,
    isEmpArrayResult: false,
    noEmpArrayResult: false,
  },
  {
    testCase: [{}],
    isArrayResult: true,
    isEmpArrayResult: false,
    noEmpArrayResult: true,
  },
];

for (const index in testCaseArray) {
  const {
    testCase,
    isArrayResult,
    isEmpArrayResult,
    noEmpArrayResult,
  }: {
    testCase: any;
    isArrayResult: boolean;
    isEmpArrayResult: boolean;
    noEmpArrayResult: boolean;
  } = testCaseArray[index];
  test(`ast-function：isArray ，testCase：${testCase}`, () => {
    expect(isArray(testCase)).toBe(isArrayResult);
  });

  test(`ast-function：isEmpArray ，testCase：${testCase}`, () => {
    expect(isEmpArray(testCase)).toBe(isEmpArrayResult);
  });

  test(`ast-function：noEmpArray ，testCase：${testCase}`, () => {
    expect(noEmpArray(testCase)).toBe(noEmpArrayResult);
  });
}

const sameTestCaseArray = [
  {
    firstTestCase: [],
    secondTestCase: [],
    result: true,
  },
  {
    firstTestCase: [1, 2, 3],
    secondTestCase: [1, 2, 3],
    result: true,
  },
  {
    firstTestCase: [1, 3, 2],
    secondTestCase: [1, 2, 3],
    result: false,
  },
  {
    firstTestCase: [1, 2, 3, 4],
    secondTestCase: [1, 2, 3],
    result: false,
  },
  {
    firstTestCase: [1, {}, 3],
    secondTestCase: [1, 2, 3],
    result: false,
  },
  {
    firstTestCase: [1, true, 3],
    secondTestCase: [1, true, 3],
    result: true,
  },
  {
    firstTestCase: [1, undefined, 3],
    secondTestCase: [1, undefined, 3],
    result: true,
  },
  {
    firstTestCase: [1, [2, 3, 4], 3, 4],
    secondTestCase: [1, [2, 3, 4], 3, 4],
    result: true,
  },
  {
    firstTestCase: [1, [2, { name: 'wang', info: [1, 2, 3] }, 4], 3, 4],
    secondTestCase: [1, [2, { name: 'wang', info: [1, 2, 3] }, 4], 3, 4],
    result: true,
  },
  {
    firstTestCase: [1, [2, { name: 'wang', info: [1, 9, 3] }, 4], 3, 4],
    secondTestCase: [1, [2, { name: 'wang', info: [1, 2, 3] }, 4], 3, 4],
    result: false,
  },
];

for (const index in sameTestCaseArray) {
  const {
    firstTestCase,
    secondTestCase,
    result,
  }: {
    firstTestCase: any;
    secondTestCase: any;
    result: boolean;
  } = sameTestCaseArray[index];
  test(`ast-function：isSameArray, firstTestCase：${firstTestCase}, secondTestCase：${secondTestCase}`, () => {
    expect(isSameArray(firstTestCase, secondTestCase)).toBe(result);
  });
}
