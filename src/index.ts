export * from './data-type/array-ast';
export * from './data-type/d-time-ast';
export * from './data-type/number-ast';
export * from './data-type/object-ast';
export * from './data-type/string-ast';
export * from './environment/basic-env-ast';

export enum EmelemtType {
  number = '[object Number]',
  string = '[object String]',
  boolean = '[object Boolean]',
  array = '[object Array]',
  object = '[object Object]',
  function = '[object Function]',
}
