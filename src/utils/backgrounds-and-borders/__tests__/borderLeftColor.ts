import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { borderLeftColor } from '../borderLeftColor';

describe('borderLeftColor', () => {
  it('should return a function', () => {
    const result = borderLeftColor();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `borderLeftColor` as component and css prop', () => {
    const result = borderLeftColor()({ style$BorderLeftColor: 'inherit' });
    expect(result).toEqual({ borderLeftColor: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderLeftColor<'a'>()({ style$BorderLeftColor: 'a' });
    expect(result).toEqual({ borderLeftColor: 'a' });
  });

  it('should use an interface which marks `borderLeftColor` as optional', () => {
    const result = borderLeftColor<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = borderLeftColor<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$BorderLeftColor: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      borderLeftColor: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderLeftColor<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$BorderLeftColor: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      borderLeftColor: 'a',
      [theme.breakpoints.large]: {
        borderLeftColor: 'b',
      },
      [theme.breakpoints.medium]: {
        borderLeftColor: 'c',
      },
      [theme.breakpoints.small]: {
        borderLeftColor: 'd',
      },
    });
  });
});
