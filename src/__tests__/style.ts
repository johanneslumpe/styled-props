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

interface IArrayProps {
  input: [string, string];
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
        // disabling tslint to get semantic ordering here instead of alphabetical
        /* tslint:disable:object-literal-sort-keys */
        small: buildMediaQueryString(30),
        medium: buildMediaQueryString(40),
        large: buildMediaQueryString(50),
        /* tslint:enable */
      },
    };
  });

  it('should return a function', () => {
    const result = style<IProps>({ cssProp: 'output', prop: 'input' });

    expect(result).toBeInstanceOf(Function);
  });

  it('should return `undefined` if specified prop is not set', () => {
    const result = style<IProps>({ cssProp: 'output', prop: 'input' })({});

    expect(result).toBe(undefined);
  });

  it('should assign the value of `prop` to `cssProp` and return an object if a value is set', () => {
    const result = style<IProps>({ cssProp: 'output', prop: 'input' })({
      input: 'value',
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
      typeof themeWithBreakpoints,
      typeof themeWithBreakpoints.breakpoints
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
      typeof themeWithBreakpoints,
      typeof themeWithBreakpoints.breakpoints
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

  it('should order media query results based on ordering within `theme.breakpoints` not based on ordering of the responsive object props', () => {
    const result = style<
      IColorProps<{ [index: string]: string }>,
      typeof themeWithBreakpoints,
      typeof themeWithBreakpoints.breakpoints
    >({
      cssProp: 'color',
      prop: 'input',
      themeProp: 'colors',
    })({
      input: {
        /* tslint:disable:object-literal-sort-keys */
        medium: '#ff0',
        small: '#fff',
        large: '#000',
        /* tslint:enable */
      },
      theme: themeWithBreakpoints,
    });

    expect(result && Object.keys(result)).toEqual([
      themeWithBreakpoints.breakpoints.small,
      themeWithBreakpoints.breakpoints.medium,
      themeWithBreakpoints.breakpoints.large,
    ]);
  });

  it('should allow `base` as value for breakpoints to define the base value (without media query) of a property', () => {
    const result = style<
      IColorProps<typeof theme.colors>,
      typeof themeWithBreakpoints,
      typeof themeWithBreakpoints.breakpoints
    >({
      cssProp: 'color',
      prop: 'input',
      themeProp: 'colors',
    })({
      input: {
        base: 'red',
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

  it('should put base values in front of all other values', () => {
    const result = style<
      IColorProps<typeof theme.colors>,
      typeof themeWithBreakpoints,
      typeof themeWithBreakpoints.breakpoints
    >({
      cssProp: 'color',
      prop: 'input',
      themeProp: 'colors',
    })({
      input: {
        base: 'red',
        large: 'red',
        medium: 'green',
        small: 'blue',
      },
      theme: themeWithBreakpoints,
    });

    expect(result && Object.keys(result)).toEqual([
      'color',
      themeWithBreakpoints.breakpoints.small,
      themeWithBreakpoints.breakpoints.medium,
      themeWithBreakpoints.breakpoints.large,
    ]);
  });

  it('should return `undefined` if a responsive object is passed in but no theme and/or breakpoints are provided', () => {
    const func = style<
      IColorProps<typeof theme.colors>,
      typeof themeWithBreakpoints,
      typeof themeWithBreakpoints.breakpoints
    >({
      cssProp: 'color',
      prop: 'input',
      themeProp: 'colors',
    });

    const noThemeResult = func({
      input: {
        base: 'red',
        large: 'red',
        medium: 'green',
        small: 'blue',
      },
      theme: (null as unknown) as typeof themeWithBreakpoints,
    });

    const noBreakpointsResult = func({
      input: {
        base: 'red',
        large: 'red',
        medium: 'green',
        small: 'blue',
      },
      theme: {} as typeof themeWithBreakpoints,
    });

    expect(noThemeResult).toBe(undefined);
    expect(noBreakpointsResult).toBe(undefined);
  });

  it('should combine array values', () => {
    const func = style<IArrayProps>({
      cssProp: 'test',
      prop: 'input',
    });

    const result = func({ input: ['a', 'b'] });

    expect(result).toEqual({
      test: 'a b',
    });
  });

  it('should allow resolving of theme values in within arrays using a custom array resolver', () => {
    const func = style<IArrayProps, typeof theme>({
      arrayResolver: (value, themeValue) => {
        const myTheme: any = themeValue || ({} as { [index: string]: string });
        return value.map((val, i) => myTheme[val.toString()] || val).join(' ');
      },
      cssProp: 'test',
      prop: 'input',
      themeProp: 'colors',
    });

    const result = func({ input: ['red', 'green'], theme });

    expect(result).toEqual({
      test: '#f00 #0f0',
    });
  });
});
