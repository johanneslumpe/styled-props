import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { borderBlockStartColor } from '../borderBlockStartColor';

describe('borderBlockStartColor', () => {
  it('should return a function', () => {
    const result = borderBlockStartColor();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `borderBlockStartColor` as component and css prop', () => {
    const result = borderBlockStartColor()({ style$BorderBlockStartColor: 'inherit' });
    expect(result).toEqual({ borderBlockStartColor: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderBlockStartColor<'a'>()({ style$BorderBlockStartColor: 'a' });
    expect(result).toEqual({ borderBlockStartColor: 'a' });
  });

  it('should use an interface which marks `borderBlockStartColor` as optional', () => {
    const result = borderBlockStartColor<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = borderBlockStartColor<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$BorderBlockStartColor: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      borderBlockStartColor: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderBlockStartColor<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$BorderBlockStartColor: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      borderBlockStartColor: 'a',
      [theme.breakpoints.large]: {
        borderBlockStartColor: 'b',
      },
      [theme.breakpoints.medium]: {
        borderBlockStartColor: 'c',
      },
      [theme.breakpoints.small]: {
        borderBlockStartColor: 'd',
      },
    });
  });
});
