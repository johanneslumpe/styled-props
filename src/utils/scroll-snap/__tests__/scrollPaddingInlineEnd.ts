import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { scrollPaddingInlineEnd } from '../scrollPaddingInlineEnd';

describe('scrollPaddingInlineEnd', () => {
  it('should return a function', () => {
    const result = scrollPaddingInlineEnd();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `scrollPaddingInlineEnd` as component and css prop', () => {
    const result = scrollPaddingInlineEnd()({ style$ScrollPaddingInlineEnd: 'inherit' });
    expect(result).toEqual({ scrollPaddingInlineEnd: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = scrollPaddingInlineEnd<'a'>()({ style$ScrollPaddingInlineEnd: 'a' });
    expect(result).toEqual({ scrollPaddingInlineEnd: 'a' });
  });

  it('should use an interface which marks `scrollPaddingInlineEnd` as optional', () => {
    const result = scrollPaddingInlineEnd<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = scrollPaddingInlineEnd<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$ScrollPaddingInlineEnd: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      scrollPaddingInlineEnd: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = scrollPaddingInlineEnd<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$ScrollPaddingInlineEnd: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      scrollPaddingInlineEnd: 'a',
      [theme.breakpoints.large]: {
        scrollPaddingInlineEnd: 'b',
      },
      [theme.breakpoints.medium]: {
        scrollPaddingInlineEnd: 'c',
      },
      [theme.breakpoints.small]: {
        scrollPaddingInlineEnd: 'd',
      },
    });
  });
});
