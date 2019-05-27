import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { scrollPaddingTop } from '../scrollPaddingTop';

describe('scrollPaddingTop', () => {
  it('should return a function', () => {
    const result = scrollPaddingTop();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `scrollPaddingTop` as component and css prop', () => {
    const result = scrollPaddingTop()({ style$ScrollPaddingTop: 'inherit' });
    expect(result).toEqual({ scrollPaddingTop: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = scrollPaddingTop<'a'>()({ style$ScrollPaddingTop: 'a' });
    expect(result).toEqual({ scrollPaddingTop: 'a' });
  });

  it('should use an interface which marks `scrollPaddingTop` as optional', () => {
    const result = scrollPaddingTop<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = scrollPaddingTop<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$ScrollPaddingTop: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      scrollPaddingTop: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = scrollPaddingTop<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$ScrollPaddingTop: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      scrollPaddingTop: 'a',
      [theme.breakpoints.large]: {
        scrollPaddingTop: 'b',
      },
      [theme.breakpoints.medium]: {
        scrollPaddingTop: 'c',
      },
      [theme.breakpoints.small]: {
        scrollPaddingTop: 'd',
      },
    });
  });
});
