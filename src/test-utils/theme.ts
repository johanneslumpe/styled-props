export interface DummyValue {
  value: string;
}

export interface Breakpoints {
  small: string;
  medium: string;
  large: string;
}

export interface Theme {
  dummy: DummyValue;
  breakpoints: Breakpoints;
}

export interface ThemeWithoutBreakpoints {
  dummy: DummyValue;
}

export const themeWithoutBreakpoints: ThemeWithoutBreakpoints = {
  dummy: {
    value: 'test-value',
  },
};

export const theme: Theme = {
  ...themeWithoutBreakpoints,
  breakpoints: {
    large: '@media (min-width: 50em)',
    medium: '@media (min-width: 40em)',
    small: '@media (min-width: 30em)',
  },
};
