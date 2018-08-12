export type ResponsiveProp<ValueType, BreakPoints = never> = [
  BreakPoints
] extends [never]
  ? ValueType
  : ValueType | { [P in Extract<keyof BreakPoints, string>]?: ValueType };

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
  cssProp: string;
  prop: Extract<keyof P, string>;
  themeProp?: Extract<keyof T, string>;
}

export interface IStyles {
  [ruleOrSelector: string]: string | number | IStyles;
}
