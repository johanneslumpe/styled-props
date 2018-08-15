interface IPixelValue extends String {
  __px_value_flag__: never;
}

interface IChValue extends String {
  __ch_value_flag__: never;
}

interface IEmValue extends String {
  __em_value_flag__: never;
}

interface IExValue extends String {
  __ex_value_flag__: never;
}

interface IRemValue extends String {
  __rem_value_flag__: never;
}

interface IVhValue extends String {
  __vh_value_flag__: never;
}

interface IVwValue extends String {
  __vw_value_flag__: never;
}

interface IVminValue extends String {
  __vmin_value_flag__: never;
}

interface IVmaxValue extends String {
  __vmax_value_flag__: never;
}

interface ICentimeterValue extends String {
  __cm_value_flag__: never;
}

interface IMillimeterValue extends String {
  __mm_value_flag__: never;
}

interface IInchValue extends String {
  __in_value_flag__: never;
}

interface IPicaValue extends String {
  __pc_value_flag__: never;
}

interface IPointValue extends String {
  __pc_value_flag__: never;
}

interface IPercentValue extends String {
  __percent_value_flag__: never;
}

/**
 * Creates a `px` unit value
 * @param value
 */
export function px(value: number): IPixelValue {
  return `${value}px` as any;
}

/**
 * Creates a `ch` unit value
 * @param value
 */
export function ch(value: number): IChValue {
  return `${value}ch` as any;
}

/**
 * Creates an `em` unit value
 * @param value
 */
export function em(value: number): IEmValue {
  return `${value}em` as any;
}

/**
 * Creates a `rem` unit value
 * @param value
 */
export function rem(value: number): IRemValue {
  return `${value}rem` as any;
}

/**
 * Creates an `ex` unit value
 * @param value
 */
export function ex(value: number): IExValue {
  return `${value}ex` as any;
}

/**
 * Creates a `vh` unit value
 * @param value
 */
export function vh(value: number): IVhValue {
  return `${value}vh` as any;
}

/**
 * Creates a `vw` unit value
 * @param value
 */
export function vw(value: number): IVwValue {
  return `${value}vw` as any;
}

/**
 * Creates a `vmin` unit value
 * @param value
 */
export function vmin(value: number): IVminValue {
  return `${value}vmin` as any;
}

/**
 * Creates a `vmax` unit value
 * @param value
 */
export function vmax(value: number): IVmaxValue {
  return `${value}vmax` as any;
}

/**
 * Creates a `cm` unit value
 * @param value
 */
export function cm(value: number): ICentimeterValue {
  return `${value}cm` as any;
}

/**
 * Creates a `mm` unit value
 * @param value
 */
export function mm(value: number): IMillimeterValue {
  return `${value}mm` as any;
}

/**
 * Creates a `in` unit value
 * @param value
 */
export function inch(value: number): IInchValue {
  return `${value}in` as any;
}

/**
 * Creates a `pc` unit value
 * @param value
 */
export function pc(value: number): IPicaValue {
  return `${value}pc` as any;
}

/**
 * Creates a `pt` unit value
 * @param value
 */
export function pt(value: number): IPointValue {
  return `${value}pt` as any;
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
  | IPixelValue
  | IChValue
  | IEmValue
  | IExValue
  | IRemValue
  | IVhValue
  | IVwValue
  | IVminValue
  | IVmaxValue
  | ICentimeterValue
  | IMillimeterValue
  | IInchValue
  | IPicaValue
  | IPointValue
  | IPercentValue;

export function calc(
  ...args: Array<CSSCalcOperators | CSSLengthValues | number>
): ICalcValue {
  return `calc(${args.join(' ')})` as any;
}
