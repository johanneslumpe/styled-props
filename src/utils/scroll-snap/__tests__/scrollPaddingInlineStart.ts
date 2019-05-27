import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { scrollPaddingInlineStart } from '../scrollPaddingInlineStart';

describe('scrollPaddingInlineStart', () => {
  it('should return a function', () => {
    const result = scrollPaddingInlineStart();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `scrollPaddingInlineStart` as component and css prop', () => {
    const result = scrollPaddingInlineStart()({ style$ScrollPaddingInlineStart: 'inherit' });
    expect(result).toEqual({ scrollPaddingInlineStart: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = scrollPaddingInlineStart<'a'>()({ style$ScrollPaddingInlineStart: 'a' });
    expect(result).toEqual({ scrollPaddingInlineStart: 'a' });
  });

  it('should use an interface which marks `scrollPaddingInlineStart` as optional', () => {
    const result = scrollPaddingInlineStart<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = scrollPaddingInlineStart<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$ScrollPaddingInlineStart: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      scrollPaddingInlineStart: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = scrollPaddingInlineStart<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$ScrollPaddingInlineStart: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      scrollPaddingInlineStart: 'a',
      [theme.breakpoints.large]: {
        scrollPaddingInlineStart: 'b',
      },
      [theme.breakpoints.medium]: {
        scrollPaddingInlineStart: 'c',
      },
      [theme.breakpoints.small]: {
        scrollPaddingInlineStart: 'd',
      },
    });
  });
});
