import { IStyles } from '../types';
import { variant } from '../variant';

interface IProps {
  input?: Extract<keyof IButtonVariants, string>;
}

interface IButtonVariants {
  primary: IStyles;
  secondary: IStyles;
}

interface IBreakpoints {
  small: string;
  medium: string;
  large: string;
}

interface ITheme {
  buttonVariants: IButtonVariants;
}

interface IThemeWithBreakpoints extends ITheme {
  breakpoints: IBreakpoints;
}

const buildMediaQueryString = (emValue: number) =>
  `@media (min-width: ${emValue}em)`;

describe('variant', () => {
  let theme: ITheme;
  let themeWithBreakpoints: IThemeWithBreakpoints;

  beforeEach(() => {
    theme = {
      buttonVariants: {
        primary: {
          color: 'red',
          margin: '5px',
        },
        secondary: {
          color: 'blue',
          margin: '10px',
        },
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
    const result = variant<IProps, ITheme>({
      prop: 'input',
      themeProp: 'buttonVariants',
    });

    expect(result).toBeInstanceOf(Function);
  });

  it('should return `undefined` if specified prop is not set', () => {
    const result = variant<IProps, ITheme>({
      prop: 'input',
      themeProp: 'buttonVariants',
    })({ theme });
    expect(result).toBe(undefined);
  });

  it('should return the theme value for `prop`', () => {
    const result = variant<IProps, ITheme>({
      prop: 'input',
      themeProp: 'buttonVariants',
    })({
      theme,
      input: 'primary',
    });

    expect(result).toEqual(theme.buttonVariants.primary);
  });

  it('should return `undefined` if `theme[themeProp][prop]` is falsy', () => {
    const result = variant<any, any>({
      prop: 'input',
      themeProp: 'invalidProp',
    })({
      input: 'primary',
      theme,
    });

    expect(result).toEqual(undefined);
  });

  it('should return `undefined` if `theme[themeProp]` is not an object', () => {
    const t = {
      buttonVariants: undefined,
    };

    const result = variant<any, typeof t>({
      prop: 'input',
      themeProp: 'buttonVariants',
    })({
      input: 'primary',
      theme: {
        ...theme,
        buttonVariants: undefined,
      },
    });

    expect(result).toEqual(undefined);
  });

  it('should return the respective values for breakpoints', () => {
    const result = variant<
      IProps,
      typeof themeWithBreakpoints,
      typeof themeWithBreakpoints.breakpoints
    >({
      prop: 'input',
      themeProp: 'buttonVariants',
    })({
      input: {
        large: 'primary',
        medium: 'secondary',
        small: 'primary',
      },
      theme: themeWithBreakpoints,
    });

    expect(result).toEqual({
      [themeWithBreakpoints.breakpoints.large]:
        themeWithBreakpoints.buttonVariants.primary,
      [themeWithBreakpoints.breakpoints.medium]:
        themeWithBreakpoints.buttonVariants.secondary,
      [themeWithBreakpoints.breakpoints.small]:
        themeWithBreakpoints.buttonVariants.primary,
    });
  });

  it('should return the value as is for each breakpoint, if no value can be found on the theme', () => {
    const result = variant<
      { [index: string]: any },
      typeof themeWithBreakpoints,
      typeof themeWithBreakpoints.breakpoints
    >({
      prop: 'input',
      themeProp: 'buttonVariants',
    })({
      input: {
        large: 'invalid',
        medium: 'invalid',
        small: 'invalid',
      },
      theme: themeWithBreakpoints,
    });

    expect(result).toEqual({
      [themeWithBreakpoints.breakpoints.large]: 'invalid',
      [themeWithBreakpoints.breakpoints.medium]: 'invalid',
      [themeWithBreakpoints.breakpoints.small]: 'invalid',
    });
  });

  it('should order media query results based on ordering within `theme.breakpoints` not based on ordering of the responsive object props', () => {
    const result = variant<
      IProps,
      typeof themeWithBreakpoints,
      typeof themeWithBreakpoints.breakpoints
    >({
      prop: 'input',
      themeProp: 'buttonVariants',
    })({
      input: {
        /* tslint:disable:object-literal-sort-keys */
        medium: 'primary',
        small: 'secondary',
        large: 'primary',
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
    const result = variant<
      IProps,
      typeof themeWithBreakpoints,
      typeof themeWithBreakpoints.breakpoints
    >({
      prop: 'input',
      themeProp: 'buttonVariants',
    })({
      input: {
        base: 'primary',
        large: 'secondary',
      },
      theme: themeWithBreakpoints,
    });

    expect(result).toEqual({
      ...themeWithBreakpoints.buttonVariants.primary,
      [themeWithBreakpoints.breakpoints.large]:
        themeWithBreakpoints.buttonVariants.secondary,
    });
  });

  it('should put base values in front of all other values', () => {
    const result = variant<
      IProps,
      typeof themeWithBreakpoints,
      typeof themeWithBreakpoints.breakpoints
    >({
      prop: 'input',
      themeProp: 'buttonVariants',
    })({
      input: {
        base: 'secondary',
        large: 'primary',
        medium: 'primary',
        small: 'primary',
      },
      theme: themeWithBreakpoints,
    });

    expect(result && Object.keys(result)).toEqual([
      ...Object.keys(themeWithBreakpoints.buttonVariants.secondary),
      themeWithBreakpoints.breakpoints.small,
      themeWithBreakpoints.breakpoints.medium,
      themeWithBreakpoints.breakpoints.large,
    ]);
  });

  it('should return `undefined` if a responsive object is passed in but no theme and/or breakpoints are provided', () => {
    const func = variant<
      IProps,
      typeof themeWithBreakpoints,
      typeof themeWithBreakpoints.breakpoints
    >({
      prop: 'input',
      themeProp: 'buttonVariants',
    });

    const noThemeResult = func({
      input: {
        base: 'primary',
        large: 'secondary',
      },
      theme: (null as unknown) as typeof themeWithBreakpoints,
    });

    const noBreakpointsResult = func({
      input: {
        base: 'primary',
        large: 'secondary',
      },
      theme: {} as typeof themeWithBreakpoints,
    });

    expect(noThemeResult).toBe(undefined);
    expect(noBreakpointsResult).toBe(undefined);
  });
});
