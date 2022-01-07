import { isObject, isEmpObject, noEmpObject, isSameObject } from '../src';

const testCaseArray = [
  {
    testCase: {},
    isObjectResult: true,
    isEmpObjectResult: true,
    noEmpObjectResult: false,
  },
  {
    testCase: '{}',
    isObjectResult: false,
    isEmpObjectResult: false,
    noEmpObjectResult: false,
  },
  {
    testCase: '[]',
    isObjectResult: false,
    isEmpObjectResult: false,
    noEmpObjectResult: false,
  },
  {
    testCase: [],
    isObjectResult: false,
    isEmpObjectResult: false,
    noEmpObjectResult: false,
  },
  {
    testCase: '{1,2,3}',
    isObjectResult: false,
    isEmpObjectResult: false,
    noEmpObjectResult: false,
  },
  {
    testCase: '[1,2,3]',
    isObjectResult: false,
    isEmpObjectResult: false,
    noEmpObjectResult: false,
  },
  {
    testCase: { pip: 1, dre: 2, pop: 3 },
    isObjectResult: true,
    isEmpObjectResult: false,
    noEmpObjectResult: true,
  },
  {
    testCase: { test1: { test2: [] } },
    isObjectResult: true,
    isEmpObjectResult: false,
    noEmpObjectResult: true,
  },
];

for (const index in testCaseArray) {
  const {
    testCase,
    isObjectResult,
    isEmpObjectResult,
    noEmpObjectResult,
  }: {
    testCase: any;
    isObjectResult: boolean;
    isEmpObjectResult: boolean;
    noEmpObjectResult: boolean;
  } = testCaseArray[index];
  test(`ast-function：isObject ，testCase：${testCase}`, () => {
    expect(isObject(testCase)).toBe(isObjectResult);
  });

  test(`ast-function：isEmpObject ，testCase：${testCase}`, () => {
    expect(isEmpObject(testCase)).toBe(isEmpObjectResult);
  });

  test(`ast-function：noEmpObject ，testCase：${testCase}`, () => {
    expect(noEmpObject(testCase)).toBe(noEmpObjectResult);
  });
}

const sameTestCaseArray = [
  {
    firstTestCase: {},
    secondTestCase: {},
    result: true,
  },
  {
    firstTestCase: [],
    secondTestCase: [],
    result: false,
  },
  {
    firstTestCase: '[321, 432]',
    secondTestCase: '[321, 432]',
    result: false,
  },
  {
    firstTestCase: { test: 1, test2: 2 },
    secondTestCase: { test: 1, test2: 2, test3: 2 },
    result: false,
  },
  {
    firstTestCase: {
      test: { test: { test: { test: 123 } } },
      test2: [{}, { test: { test: { test: 123 } } }],
    },
    secondTestCase: {
      test: { test: { test: { test: 123 } } },
      test2: [{}, { test: { test: { test: 123 } } }],
    },
    result: true,
  },
  {
    firstTestCase: {
      test: { test: { test: { test: true } } },
      test2: [{}, { test: { test: { test: 123 } } }],
    },
    secondTestCase: {
      test: { test: { test: { test: 123 } } },
      test2: [{}, { test: { test: { test: 123 } } }],
    },
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
  test(`ast-function：isSameObject, firstTestCase：${firstTestCase}, secondTestCase：${secondTestCase}`, () => {
    expect(isSameObject(firstTestCase, secondTestCase)).toBe(result);
  });
}
