export interface IDummyValue {
  value: string;
}

export interface IBreakpoints {
  small: string;
  medium: string;
  large: string;
}

export interface ITheme {
  dummy: IDummyValue;
  breakpoints: IBreakpoints;
}

export interface IThemeWithoutBreakpoints {
  dummy: IDummyValue;
}

export const themeWithoutBreakpoints: IThemeWithoutBreakpoints = {
  dummy: {
    value: 'test-value',
  },
};

export const theme: ITheme = {
  ...themeWithoutBreakpoints,
  breakpoints: {
    large: '@media (min-width: 50em)',
    medium: '@media (min-width: 40em)',
    small: '@media (min-width: 30em)',
  },
};
