import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { marginInline } from '../marginInline';

describe('marginInline', () => {
  it('should return a function', () => {
    const result = marginInline();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `marginInline` as component and css prop', () => {
    const result = marginInline()({ style$MarginInline: 'inherit' });
    expect(result).toEqual({ marginInline: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = marginInline<'a'>()({ style$MarginInline: 'a' });
    expect(result).toEqual({ marginInline: 'a' });
  });

  it('should use an interface which marks `marginInline` as optional', () => {
    const result = marginInline<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = marginInline<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$MarginInline: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      marginInline: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = marginInline<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$MarginInline: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      marginInline: 'a',
      [theme.breakpoints.large]: {
        marginInline: 'b',
      },
      [theme.breakpoints.medium]: {
        marginInline: 'c',
      },
      [theme.breakpoints.small]: {
        marginInline: 'd',
      },
    });
  });
});
