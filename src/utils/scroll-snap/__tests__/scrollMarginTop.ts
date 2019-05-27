import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { scrollMarginTop } from '../scrollMarginTop';

describe('scrollMarginTop', () => {
  it('should return a function', () => {
    const result = scrollMarginTop();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `scrollMarginTop` as component and css prop', () => {
    const result = scrollMarginTop()({ style$ScrollMarginTop: 'inherit' });
    expect(result).toEqual({ scrollMarginTop: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = scrollMarginTop<'a'>()({ style$ScrollMarginTop: 'a' });
    expect(result).toEqual({ scrollMarginTop: 'a' });
  });

  it('should use an interface which marks `scrollMarginTop` as optional', () => {
    const result = scrollMarginTop<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = scrollMarginTop<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$ScrollMarginTop: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      scrollMarginTop: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = scrollMarginTop<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$ScrollMarginTop: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      scrollMarginTop: 'a',
      [theme.breakpoints.large]: {
        scrollMarginTop: 'b',
      },
      [theme.breakpoints.medium]: {
        scrollMarginTop: 'c',
      },
      [theme.breakpoints.small]: {
        scrollMarginTop: 'd',
      },
    });
  });
});
