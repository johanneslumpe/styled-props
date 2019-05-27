import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { scrollMarginLeft } from '../scrollMarginLeft';

describe('scrollMarginLeft', () => {
  it('should return a function', () => {
    const result = scrollMarginLeft();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `scrollMarginLeft` as component and css prop', () => {
    const result = scrollMarginLeft()({ style$ScrollMarginLeft: 'inherit' });
    expect(result).toEqual({ scrollMarginLeft: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = scrollMarginLeft<'a'>()({ style$ScrollMarginLeft: 'a' });
    expect(result).toEqual({ scrollMarginLeft: 'a' });
  });

  it('should use an interface which marks `scrollMarginLeft` as optional', () => {
    const result = scrollMarginLeft<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = scrollMarginLeft<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$ScrollMarginLeft: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      scrollMarginLeft: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = scrollMarginLeft<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$ScrollMarginLeft: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      scrollMarginLeft: 'a',
      [theme.breakpoints.large]: {
        scrollMarginLeft: 'b',
      },
      [theme.breakpoints.medium]: {
        scrollMarginLeft: 'c',
      },
      [theme.breakpoints.small]: {
        scrollMarginLeft: 'd',
      },
    });
  });
});
