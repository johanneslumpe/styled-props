export interface IColors {
  red: string;
  blue: string;
  green: string;
}

export interface IBreakpoints {
  small: string;
  medium: string;
  large: string;
}

export interface ITheme {
  colors: IColors;
  breakpoints: IBreakpoints;
}

export const theme: ITheme = {
  breakpoints: {
    large: '@media (min-width: 50em)',
    medium: '@media (min-width: 40em)',
    small: '@media (min-width: 30em)',
  },
  colors: {
    blue: '#00f',
    green: '#0f0',
    red: '#f00',
  },
};
