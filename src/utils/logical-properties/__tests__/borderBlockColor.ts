import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { borderBlockColor } from '../borderBlockColor';

describe('borderBlockColor', () => {
  it('should return a function', () => {
    const result = borderBlockColor();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `borderBlockColor` as component and css prop', () => {
    const result = borderBlockColor()({ style$BorderBlockColor: 'inherit' });
    expect(result).toEqual({ borderBlockColor: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderBlockColor<'a'>()({ style$BorderBlockColor: 'a' });
    expect(result).toEqual({ borderBlockColor: 'a' });
  });

  it('should use an interface which marks `borderBlockColor` as optional', () => {
    const result = borderBlockColor<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = borderBlockColor<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$BorderBlockColor: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      borderBlockColor: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderBlockColor<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$BorderBlockColor: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      borderBlockColor: 'a',
      [theme.breakpoints.large]: {
        borderBlockColor: 'b',
      },
      [theme.breakpoints.medium]: {
        borderBlockColor: 'c',
      },
      [theme.breakpoints.small]: {
        borderBlockColor: 'd',
      },
    });
  });
});
