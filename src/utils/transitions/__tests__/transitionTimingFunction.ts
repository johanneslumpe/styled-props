import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { transitionTimingFunction } from '../transitionTimingFunction';

describe('transitionTimingFunction', () => {
  it('should return a function', () => {
    const result = transitionTimingFunction();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `transitionTimingFunction` as component and css prop', () => {
    const result = transitionTimingFunction()({ transitionTimingFunction: 'inherit' });
    expect(result).toEqual({ transitionTimingFunction: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = transitionTimingFunction<'a'>()({ transitionTimingFunction: 'a' });
    expect(result).toEqual({ transitionTimingFunction: 'a' });
  });

  it('should use an interface which marks `transitionTimingFunction` as optional', () => {
    const result = transitionTimingFunction<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = transitionTimingFunction<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ transitionTimingFunction: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      transitionTimingFunction: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = transitionTimingFunction<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      transitionTimingFunction: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      transitionTimingFunction: 'a',
      [theme.breakpoints.large]: {
        transitionTimingFunction: 'b',
      },
      [theme.breakpoints.medium]: {
        transitionTimingFunction: 'c',
      },
      [theme.breakpoints.small]: {
        transitionTimingFunction: 'd',
      },
    });
  });
});
