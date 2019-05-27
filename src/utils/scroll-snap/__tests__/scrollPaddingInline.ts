import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { scrollPaddingInline } from '../scrollPaddingInline';

describe('scrollPaddingInline', () => {
  it('should return a function', () => {
    const result = scrollPaddingInline();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `scrollPaddingInline` as component and css prop', () => {
    const result = scrollPaddingInline()({ style$ScrollPaddingInline: 'inherit' });
    expect(result).toEqual({ scrollPaddingInline: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = scrollPaddingInline<'a'>()({ style$ScrollPaddingInline: 'a' });
    expect(result).toEqual({ scrollPaddingInline: 'a' });
  });

  it('should use an interface which marks `scrollPaddingInline` as optional', () => {
    const result = scrollPaddingInline<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = scrollPaddingInline<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$ScrollPaddingInline: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      scrollPaddingInline: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = scrollPaddingInline<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$ScrollPaddingInline: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      scrollPaddingInline: 'a',
      [theme.breakpoints.large]: {
        scrollPaddingInline: 'b',
      },
      [theme.breakpoints.medium]: {
        scrollPaddingInline: 'c',
      },
      [theme.breakpoints.small]: {
        scrollPaddingInline: 'd',
      },
    });
  });
});
