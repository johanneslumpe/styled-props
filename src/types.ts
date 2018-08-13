interface IBaseCssValue<T> {
  /**
   * The base css value, without any media queries applied
   */
  base?: T;
}

export type StyleProps<T> = T extends (props: infer R) => any
  ? R extends { theme?: any } ? Pick<R, Exclude<keyof R, 'theme'>> : R
  : never;

export type ResponsiveProp<ValueType, BreakPoints = never> = [
  BreakPoints
] extends [never]
  ? ValueType
  :
      | ValueType
      | ({ [P in Extract<keyof BreakPoints, string>]?: ValueType } &
          IBaseCssValue<ValueType>);

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
  ? ITheme<T>
  : IBreakpointTheme<T, B>;

export type WithTheme<P, T, B> = ResponsiveObject<P, B> &
  ThemeWithBreakpoints<T, B>;

export interface IStyleOptions<P, T> {
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
  themeProp?: Extract<keyof T, string>;
}

export interface IStyles {
  [ruleOrSelector: string]: string | number | IStyles;
}
