import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { color } from '../color';

describe('color', () => {
  it('should return a function', () => {
    const result = color();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `color` as component and css prop', () => {
    const result = color()({ style$Color: 'inherit' });
    expect(result).toEqual({ color: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = color<'a'>()({ style$Color: 'a' });
    expect(result).toEqual({ color: 'a' });
  });

  it('should use an interface which marks `color` as optional', () => {
    const result = color<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = color<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$Color: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      color: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = color<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$Color: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      color: 'a',
      [theme.breakpoints.large]: {
        color: 'b',
      },
      [theme.breakpoints.medium]: {
        color: 'c',
      },
      [theme.breakpoints.small]: {
        color: 'd',
      },
    });
  });
});
