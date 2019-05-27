import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { borderBlockEndColor } from '../borderBlockEndColor';

describe('borderBlockEndColor', () => {
  it('should return a function', () => {
    const result = borderBlockEndColor();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `borderBlockEndColor` as component and css prop', () => {
    const result = borderBlockEndColor()({ style$BorderBlockEndColor: 'inherit' });
    expect(result).toEqual({ borderBlockEndColor: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderBlockEndColor<'a'>()({ style$BorderBlockEndColor: 'a' });
    expect(result).toEqual({ borderBlockEndColor: 'a' });
  });

  it('should use an interface which marks `borderBlockEndColor` as optional', () => {
    const result = borderBlockEndColor<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = borderBlockEndColor<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$BorderBlockEndColor: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      borderBlockEndColor: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderBlockEndColor<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$BorderBlockEndColor: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      borderBlockEndColor: 'a',
      [theme.breakpoints.large]: {
        borderBlockEndColor: 'b',
      },
      [theme.breakpoints.medium]: {
        borderBlockEndColor: 'c',
      },
      [theme.breakpoints.small]: {
        borderBlockEndColor: 'd',
      },
    });
  });
});
