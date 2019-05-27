import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { scrollPadding } from '../scrollPadding';

describe('scrollPadding', () => {
  it('should return a function', () => {
    const result = scrollPadding();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `scrollPadding` as component and css prop', () => {
    const result = scrollPadding()({ style$ScrollPadding: 'inherit' });
    expect(result).toEqual({ scrollPadding: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = scrollPadding<'a'>()({ style$ScrollPadding: 'a' });
    expect(result).toEqual({ scrollPadding: 'a' });
  });

  it('should use an interface which marks `scrollPadding` as optional', () => {
    const result = scrollPadding<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = scrollPadding<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$ScrollPadding: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      scrollPadding: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = scrollPadding<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$ScrollPadding: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      scrollPadding: 'a',
      [theme.breakpoints.large]: {
        scrollPadding: 'b',
      },
      [theme.breakpoints.medium]: {
        scrollPadding: 'c',
      },
      [theme.breakpoints.small]: {
        scrollPadding: 'd',
      },
    });
  });
});
