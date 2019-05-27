import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { scrollMargin } from '../scrollMargin';

describe('scrollMargin', () => {
  it('should return a function', () => {
    const result = scrollMargin();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `scrollMargin` as component and css prop', () => {
    const result = scrollMargin()({ style$ScrollMargin: 'inherit' });
    expect(result).toEqual({ scrollMargin: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = scrollMargin<'a'>()({ style$ScrollMargin: 'a' });
    expect(result).toEqual({ scrollMargin: 'a' });
  });

  it('should use an interface which marks `scrollMargin` as optional', () => {
    const result = scrollMargin<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = scrollMargin<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$ScrollMargin: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      scrollMargin: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = scrollMargin<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$ScrollMargin: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      scrollMargin: 'a',
      [theme.breakpoints.large]: {
        scrollMargin: 'b',
      },
      [theme.breakpoints.medium]: {
        scrollMargin: 'c',
      },
      [theme.breakpoints.small]: {
        scrollMargin: 'd',
      },
    });
  });
});
