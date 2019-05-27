import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { scrollPaddingRight } from '../scrollPaddingRight';

describe('scrollPaddingRight', () => {
  it('should return a function', () => {
    const result = scrollPaddingRight();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `scrollPaddingRight` as component and css prop', () => {
    const result = scrollPaddingRight()({ style$ScrollPaddingRight: 'inherit' });
    expect(result).toEqual({ scrollPaddingRight: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = scrollPaddingRight<'a'>()({ style$ScrollPaddingRight: 'a' });
    expect(result).toEqual({ scrollPaddingRight: 'a' });
  });

  it('should use an interface which marks `scrollPaddingRight` as optional', () => {
    const result = scrollPaddingRight<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = scrollPaddingRight<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$ScrollPaddingRight: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      scrollPaddingRight: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = scrollPaddingRight<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$ScrollPaddingRight: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      scrollPaddingRight: 'a',
      [theme.breakpoints.large]: {
        scrollPaddingRight: 'b',
      },
      [theme.breakpoints.medium]: {
        scrollPaddingRight: 'c',
      },
      [theme.breakpoints.small]: {
        scrollPaddingRight: 'd',
      },
    });
  });
});
