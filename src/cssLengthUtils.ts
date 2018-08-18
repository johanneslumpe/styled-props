export interface IChValue extends String {
  __ch_brand_type__: never;
}
export function ch(value: number): IChValue {
  return `${value}ch` as any;
}
export interface ICmValue extends String {
  __cm_brand_type__: never;
}
export function cm(value: number): ICmValue {
  return `${value}cm` as any;
}
export interface IEmValue extends String {
  __em_brand_type__: never;
}
export function em(value: number): IEmValue {
  return `${value}em` as any;
}
export interface IExValue extends String {
  __ex_brand_type__: never;
}
export function ex(value: number): IExValue {
  return `${value}ex` as any;
}
export interface IFrValue extends String {
  __fr_brand_type__: never;
}
export function fr(value: number): IFrValue {
  return `${value}fr` as any;
}
export interface IInchValue extends String {
  __in_brand_type__: never;
}
export function inch(value: number): IInchValue {
  return `${value}in` as any;
}
export interface IMmValue extends String {
  __mm_brand_type__: never;
}
export function mm(value: number): IMmValue {
  return `${value}mm` as any;
}
export interface IPcValue extends String {
  __pc_brand_type__: never;
}
export function pc(value: number): IPcValue {
  return `${value}pc` as any;
}
export interface IPtValue extends String {
  __pt_brand_type__: never;
}
export function pt(value: number): IPtValue {
  return `${value}pt` as any;
}
export interface IPxValue extends String {
  __px_brand_type__: never;
}
export function px(value: number): IPxValue {
  return `${value}px` as any;
}
export interface IQValue extends String {
  __Q_brand_type__: never;
}
export function q(value: number): IQValue {
  return `${value}Q` as any;
}
export interface IRemValue extends String {
  __rem_brand_type__: never;
}
export function rem(value: number): IRemValue {
  return `${value}rem` as any;
}
export interface IVhValue extends String {
  __vh_brand_type__: never;
}
export function vh(value: number): IVhValue {
  return `${value}vh` as any;
}
export interface IVmaxValue extends String {
  __vmax_brand_type__: never;
}
export function vmax(value: number): IVmaxValue {
  return `${value}vmax` as any;
}
export interface IVminValue extends String {
  __vmin_brand_type__: never;
}
export function vmin(value: number): IVminValue {
  return `${value}vmin` as any;
}
export interface IVwValue extends String {
  __vw_brand_type__: never;
}
export function vw(value: number): IVwValue {
  return `${value}vw` as any;
}
