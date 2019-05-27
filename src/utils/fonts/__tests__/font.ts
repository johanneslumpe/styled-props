import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { font } from '../font';

describe('font', () => {
  it('should return a function', () => {
    const result = font();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `font` as component and css prop', () => {
    const result = font()({ style$Font: 'inherit' });
    expect(result).toEqual({ font: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = font<'a'>()({ style$Font: 'a' });
    expect(result).toEqual({ font: 'a' });
  });

  it('should use an interface which marks `font` as optional', () => {
    const result = font<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = font<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$Font: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      font: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = font<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$Font: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      font: 'a',
      [theme.breakpoints.large]: {
        font: 'b',
      },
      [theme.breakpoints.medium]: {
        font: 'c',
      },
      [theme.breakpoints.small]: {
        font: 'd',
      },
    });
  });
});
