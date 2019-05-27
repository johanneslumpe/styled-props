import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { scrollPaddingLeft } from '../scrollPaddingLeft';

describe('scrollPaddingLeft', () => {
  it('should return a function', () => {
    const result = scrollPaddingLeft();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `scrollPaddingLeft` as component and css prop', () => {
    const result = scrollPaddingLeft()({ style$ScrollPaddingLeft: 'inherit' });
    expect(result).toEqual({ scrollPaddingLeft: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = scrollPaddingLeft<'a'>()({ style$ScrollPaddingLeft: 'a' });
    expect(result).toEqual({ scrollPaddingLeft: 'a' });
  });

  it('should use an interface which marks `scrollPaddingLeft` as optional', () => {
    const result = scrollPaddingLeft<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = scrollPaddingLeft<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$ScrollPaddingLeft: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      scrollPaddingLeft: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = scrollPaddingLeft<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$ScrollPaddingLeft: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      scrollPaddingLeft: 'a',
      [theme.breakpoints.large]: {
        scrollPaddingLeft: 'b',
      },
      [theme.breakpoints.medium]: {
        scrollPaddingLeft: 'c',
      },
      [theme.breakpoints.small]: {
        scrollPaddingLeft: 'd',
      },
    });
  });
});
