interface BaseCssValue<T> {
  /**
   * The base css value, without any media queries applied
   */
  base?: T;
}

export type InferPropsFromFunctionArgument<T> = T extends (
  props: infer R,
) => any
  ? R extends { theme?: any } ? Pick<R, Exclude<keyof R, 'theme'>> : R
  : {};

export type StyleProps<
  T1,
  T2 = {},
  T3 = {},
  T4 = {},
  T5 = {},
  T6 = {},
  T7 = {},
  T8 = {},
  T9 = {}
> = InferPropsFromFunctionArgument<T1> &
  InferPropsFromFunctionArgument<T2> &
  InferPropsFromFunctionArgument<T3> &
  InferPropsFromFunctionArgument<T4> &
  InferPropsFromFunctionArgument<T5> &
  InferPropsFromFunctionArgument<T6> &
  InferPropsFromFunctionArgument<T7> &
  InferPropsFromFunctionArgument<T8> &
  InferPropsFromFunctionArgument<T9>;

export type ResponsivePropValue<BreakPoints, ValueType> = {
  [P in Extract<keyof BreakPoints, string>]?: ValueType
} &
  BaseCssValue<ValueType>;

export type ResponsiveProp<ValueType, BreakPoints = never> = [
  BreakPoints
] extends [never]
  ? ValueType
  : ValueType | ResponsivePropValue<BreakPoints, ValueType>;

export interface Dictionary<T> {
  [index: string]: T;
}

export type ResponsiveObject<P, B> = {
  [K in keyof P]?: ResponsiveProp<P[K], B>
};

export interface Theme<T> {
  theme: T & { breakpoints?: undefined };
}

export interface IBreakpointTheme<T, B> {
  theme: T & { breakpoints: B };
}

export type ThemeWithBreakpoints<T, B> = [B] extends [never]
  ? [T] extends [never] ? Partial<Theme<any>> : Theme<T>
  : IBreakpointTheme<T, B>;

export type WithTheme<P, T, B> = ResponsiveObject<P, B> &
  ThemeWithBreakpoints<T, B>;

export interface StyleOptions<
  P,
  T,
  K extends Extract<keyof T, string> = Extract<keyof T, string>
> {
  /**
   * The css property this function should map to
   */
  cssProp: string;

  /**
   * The property of the component's props to read from
   */
  prop: Extract<keyof P, string>;

  /**
   * The property within the theme to map the `prop` value to
   */
  themeProp?: K;

  /**
   * The resolver to be used for array values
   */
  arrayResolver?: (value: Array<string | number>, themeValue?: T[K]) => string;
}

export interface VariantOptions<
  P,
  T,
  K extends Extract<keyof T, string> = Extract<keyof T, string>
> {
  /**
   * The property of the component's props to read from
   */
  prop: Extract<keyof P, string>;

  /**
   * The property within the theme to map the `prop` value to
   */
  themeProp: K;
}

export interface Styles {
  [ruleOrSelector: string]: string | number | Styles;
}
