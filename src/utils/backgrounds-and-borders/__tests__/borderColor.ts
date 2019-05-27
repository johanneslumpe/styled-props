import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { borderColor } from '../borderColor';

describe('borderColor', () => {
  it('should return a function', () => {
    const result = borderColor();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `borderColor` as component and css prop', () => {
    const result = borderColor()({ style$BorderColor: 'inherit' });
    expect(result).toEqual({ borderColor: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderColor<'a'>()({ style$BorderColor: 'a' });
    expect(result).toEqual({ borderColor: 'a' });
  });

  it('should use an interface which marks `borderColor` as optional', () => {
    const result = borderColor<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = borderColor<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$BorderColor: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      borderColor: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderColor<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$BorderColor: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      borderColor: 'a',
      [theme.breakpoints.large]: {
        borderColor: 'b',
      },
      [theme.breakpoints.medium]: {
        borderColor: 'c',
      },
      [theme.breakpoints.small]: {
        borderColor: 'd',
      },
    });
  });
});
