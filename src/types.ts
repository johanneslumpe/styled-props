interface IBaseCssValue<T> {
  /**
   * The base css value, without any media queries applied
   */
  base?: T;
}

export type StyleProps<T> = T extends (props: infer R) => any
  ? R extends { theme?: any } ? Pick<R, Exclude<keyof R, 'theme'>> : R
  : never;

export type ResponsivePropValue<BreakPoints, ValueType> = {
  [P in Extract<keyof BreakPoints, string>]?: ValueType
} &
  IBaseCssValue<ValueType>;

export type ResponsiveProp<ValueType, BreakPoints = never> = [
  BreakPoints
] extends [never]
  ? ValueType
  : ValueType | ResponsivePropValue<BreakPoints, ValueType>;

export interface IDictionary<T> {
  [index: string]: T;
}

export type ResponsiveObject<P, B> = {
  [K in keyof P]?: ResponsiveProp<P[K], B>
};

export interface ITheme<T> {
  theme: T & { breakpoints?: undefined };
}

export interface IBreakpointTheme<T, B> {
  theme: T & { breakpoints: B };
}

export type ThemeWithBreakpoints<T, B> = [B] extends [never]
  ? [T] extends [never] ? Partial<ITheme<any>> : ITheme<T>
  : IBreakpointTheme<T, B>;

export type WithTheme<P, T, B> = ResponsiveObject<P, B> &
  ThemeWithBreakpoints<T, B>;

export interface IStyleOptions<
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

export interface IStyles {
  [ruleOrSelector: string]: string | number | IStyles;
}
