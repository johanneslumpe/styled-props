import { style } from '../style';

interface IProps {
  input?: string;
}

interface IColorProps<Colors> {
  input?: Extract<keyof Colors, string>;
}

interface IColors {
  red: string;
  green: string;
  blue: string;
}

interface IBreakpoints {
  small: string;
  medium: string;
  large: string;
}

interface ITheme {
  colors: IColors;
}

interface IThemeWithBreakpoints {
  colors: IColors;
  breakpoints: IBreakpoints;
}

const buildMediaQueryString = (emValue: number) =>
  `@media (min-width: ${emValue}em)`;
describe('style', () => {
  let theme: ITheme;
  let themeWithBreakpoints: IThemeWithBreakpoints;

  beforeEach(() => {
    theme = {
      colors: {
        blue: '#00f',
        green: '#0f0',
        red: '#f00',
      },
    };

    themeWithBreakpoints = {
      ...theme,
      breakpoints: {
        large: buildMediaQueryString(50),
        medium: buildMediaQueryString(40),
        small: buildMediaQueryString(30),
      },
    };
  });

  it('should return a function', () => {
    const result = style<IProps>({ cssProp: 'output', prop: 'input' });

    expect(result).toBeInstanceOf(Function);
  });

  it('should return `undefined` if specified prop is not set', () => {
    const result = style<IProps>({ cssProp: 'output', prop: 'input' })({
      theme: {},
    });

    expect(result).toBe(undefined);
  });

  it('should assign the value of `prop` to `cssProp` and return an object if a value is set', () => {
    const result = style<IProps>({ cssProp: 'output', prop: 'input' })({
      input: 'value',
      theme: {},
    });

    expect(result).toEqual({ output: 'value' });
  });

  it('should return the value for a theme prop', () => {
    const result = style<IColorProps<typeof theme.colors>, ITheme>({
      cssProp: 'color',
      prop: 'input',
      themeProp: 'colors',
    })({
      input: 'red',
      theme,
    });

    expect(result).toEqual({ color: theme.colors.red });
  });

  it('should return the prop value if `theme[themeProp][prop]` is falsy', () => {
    const result = style<IColorProps<{ [index: string]: string }>, ITheme>({
      cssProp: 'color',
      prop: 'input',
      themeProp: 'colors',
    })({
      input: '#ddd',
      theme,
    });

    expect(result).toEqual({ color: '#ddd' });
  });

  it('should return the prop value if `theme[themeProp]` is not an object', () => {
    const t = {
      colors: undefined,
    };

    const result = style<IColorProps<{ [index: string]: string }>, typeof t>({
      cssProp: 'color',
      prop: 'input',
      themeProp: 'colors',
    })({
      input: '#ddd',
      theme: {
        ...theme,
        colors: undefined,
      },
    });

    expect(result).toEqual({ color: '#ddd' });
  });

  it('should return the respective values for breakpoints', () => {
    const result = style<
      IColorProps<typeof theme.colors>,
      ITheme,
      IBreakpoints
    >({
      cssProp: 'color',
      prop: 'input',
      themeProp: 'colors',
    })({
      input: {
        large: 'blue',
        medium: 'red',
        small: 'green',
      },
      theme: themeWithBreakpoints,
    });

    expect(result).toEqual({
      [themeWithBreakpoints.breakpoints.large]: {
        color: '#00f',
      },
      [themeWithBreakpoints.breakpoints.medium]: {
        color: '#f00',
      },
      [themeWithBreakpoints.breakpoints.small]: {
        color: '#0f0',
      },
    });
  });

  it('should return the value as is for each breakpoint, if no value can be found on the theme', () => {
    const result = style<
      IColorProps<{ [index: string]: string }>,
      ITheme,
      IBreakpoints
    >({
      cssProp: 'color',
      prop: 'input',
      themeProp: 'colors',
    })({
      input: {
        large: '#000',
        medium: '#ff0',
        small: '#fff',
      },
      theme: themeWithBreakpoints,
    });

    expect(result).toEqual({
      [themeWithBreakpoints.breakpoints.large]: {
        color: '#000',
      },
      [themeWithBreakpoints.breakpoints.medium]: {
        color: '#ff0',
      },
      [themeWithBreakpoints.breakpoints.small]: {
        color: '#fff',
      },
    });
  });

  it('should allow an empty string value for breakpoints to define the base value of a property', () => {
    const result = style<
      IColorProps<typeof theme.colors>,
      ITheme,
      IBreakpoints
    >({
      cssProp: 'color',
      prop: 'input',
      themeProp: 'colors',
    })({
      input: {
        '': 'red',
        large: 'red',
        medium: 'green',
        small: 'blue',
      },
      theme: themeWithBreakpoints,
    });

    expect(result).toEqual({
      color: '#f00',
      [themeWithBreakpoints.breakpoints.large]: {
        color: '#f00',
      },
      [themeWithBreakpoints.breakpoints.medium]: {
        color: '#0f0',
      },
      [themeWithBreakpoints.breakpoints.small]: {
        color: '#00f',
      },
    });
  });

  it('should return `undefined` for an empty responsive object', () => {
    const result = style<
      IColorProps<{ [index: string]: string }>,
      ITheme,
      IBreakpoints
    >({
      cssProp: 'color',
      prop: 'input',
      themeProp: 'colors',
    })({
      input: {},
      theme: themeWithBreakpoints,
    });

    expect(result).toEqual(undefined);
  });
});
