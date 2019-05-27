import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { scrollMarginInlineEnd } from '../scrollMarginInlineEnd';

describe('scrollMarginInlineEnd', () => {
  it('should return a function', () => {
    const result = scrollMarginInlineEnd();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `scrollMarginInlineEnd` as component and css prop', () => {
    const result = scrollMarginInlineEnd()({ style$ScrollMarginInlineEnd: 'inherit' });
    expect(result).toEqual({ scrollMarginInlineEnd: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = scrollMarginInlineEnd<'a'>()({ style$ScrollMarginInlineEnd: 'a' });
    expect(result).toEqual({ scrollMarginInlineEnd: 'a' });
  });

  it('should use an interface which marks `scrollMarginInlineEnd` as optional', () => {
    const result = scrollMarginInlineEnd<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = scrollMarginInlineEnd<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$ScrollMarginInlineEnd: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      scrollMarginInlineEnd: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = scrollMarginInlineEnd<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$ScrollMarginInlineEnd: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      scrollMarginInlineEnd: 'a',
      [theme.breakpoints.large]: {
        scrollMarginInlineEnd: 'b',
      },
      [theme.breakpoints.medium]: {
        scrollMarginInlineEnd: 'c',
      },
      [theme.breakpoints.small]: {
        scrollMarginInlineEnd: 'd',
      },
    });
  });
});
