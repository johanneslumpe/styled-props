import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { scrollMarginInline } from '../scrollMarginInline';

describe('scrollMarginInline', () => {
  it('should return a function', () => {
    const result = scrollMarginInline();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `scrollMarginInline` as component and css prop', () => {
    const result = scrollMarginInline()({ style$ScrollMarginInline: 'inherit' });
    expect(result).toEqual({ scrollMarginInline: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = scrollMarginInline<'a'>()({ style$ScrollMarginInline: 'a' });
    expect(result).toEqual({ scrollMarginInline: 'a' });
  });

  it('should use an interface which marks `scrollMarginInline` as optional', () => {
    const result = scrollMarginInline<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = scrollMarginInline<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$ScrollMarginInline: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      scrollMarginInline: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = scrollMarginInline<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$ScrollMarginInline: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      scrollMarginInline: 'a',
      [theme.breakpoints.large]: {
        scrollMarginInline: 'b',
      },
      [theme.breakpoints.medium]: {
        scrollMarginInline: 'c',
      },
      [theme.breakpoints.small]: {
        scrollMarginInline: 'd',
      },
    });
  });
});
