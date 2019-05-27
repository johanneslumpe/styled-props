import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { scrollMarginInlineStart } from '../scrollMarginInlineStart';

describe('scrollMarginInlineStart', () => {
  it('should return a function', () => {
    const result = scrollMarginInlineStart();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `scrollMarginInlineStart` as component and css prop', () => {
    const result = scrollMarginInlineStart()({ style$ScrollMarginInlineStart: 'inherit' });
    expect(result).toEqual({ scrollMarginInlineStart: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = scrollMarginInlineStart<'a'>()({ style$ScrollMarginInlineStart: 'a' });
    expect(result).toEqual({ scrollMarginInlineStart: 'a' });
  });

  it('should use an interface which marks `scrollMarginInlineStart` as optional', () => {
    const result = scrollMarginInlineStart<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = scrollMarginInlineStart<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$ScrollMarginInlineStart: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      scrollMarginInlineStart: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = scrollMarginInlineStart<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$ScrollMarginInlineStart: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      scrollMarginInlineStart: 'a',
      [theme.breakpoints.large]: {
        scrollMarginInlineStart: 'b',
      },
      [theme.breakpoints.medium]: {
        scrollMarginInlineStart: 'c',
      },
      [theme.breakpoints.small]: {
        scrollMarginInlineStart: 'd',
      },
    });
  });
});
