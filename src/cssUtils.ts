import {
  IChValue,
  ICmValue,
  IEmValue,
  IExValue,
  IFrValue,
  IInchValue,
  IMmValue,
  IPcValue,
  IPtValue,
  IPxValue,
  IQValue,
  IRemValue,
  IVhValue,
  IVmaxValue,
  IVminValue,
  IVwValue,
} from './cssLengthUtils';
interface IPercentValue extends String {
  __percent_value_flag__: never;
}

/**
 * Creates a `percent` unit value
 * @param value
 */
export function percent(value: number): IPercentValue {
  return `${value}%` as any;
}

interface ICalcValue extends String {
  __calc_value_flag__: never;
}

type CSSCalcOperators = '-' | '+' | '/' | '*' | '(' | ')';
export type CSSLengthValues =
  | IChValue
  | ICmValue
  | IEmValue
  | IExValue
  | IFrValue
  | IInchValue
  | IMmValue
  | IPcValue
  | IPtValue
  | IPxValue
  | IQValue
  | IRemValue
  | IVhValue
  | IVmaxValue
  | IVminValue
  | IVwValue
  | IPercentValue;

export function calc(
  ...args: Array<CSSCalcOperators | CSSLengthValues | number>
): ICalcValue {
  return `calc(${args.join(' ')})` as any;
}
