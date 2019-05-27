import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { borderImageSlice } from '../borderImageSlice';

describe('borderImageSlice', () => {
  it('should return a function', () => {
    const result = borderImageSlice();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `borderImageSlice` as component and css prop', () => {
    const result = borderImageSlice()({ style$BorderImageSlice: 'inherit' });
    expect(result).toEqual({ borderImageSlice: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderImageSlice<'a'>()({ style$BorderImageSlice: 'a' });
    expect(result).toEqual({ borderImageSlice: 'a' });
  });

  it('should use an interface which marks `borderImageSlice` as optional', () => {
    const result = borderImageSlice<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = borderImageSlice<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$BorderImageSlice: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      borderImageSlice: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderImageSlice<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$BorderImageSlice: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      borderImageSlice: 'a',
      [theme.breakpoints.large]: {
        borderImageSlice: 'b',
      },
      [theme.breakpoints.medium]: {
        borderImageSlice: 'c',
      },
      [theme.breakpoints.small]: {
        borderImageSlice: 'd',
      },
    });
  });
});
