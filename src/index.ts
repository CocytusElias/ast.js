import * as arrayAst from './data-type/arrayAst';
import * as numberAst from './data-type/numberAst';
import * as objectAst from './data-type/objectAst';

export enum EmelemtType {
  number = '[object Number]',
  string = '[object String]',
  boolean = '[object Boolean]',
  array = '[object Array]',
  object = '[object Object]',
  function = '[object Function]',
}

export default {
  arrayAst,
  numberAst,
  objectAst,
};
