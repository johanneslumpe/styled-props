import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { scrollMarginBottom } from '../scrollMarginBottom';

describe('scrollMarginBottom', () => {
  it('should return a function', () => {
    const result = scrollMarginBottom();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `scrollMarginBottom` as component and css prop', () => {
    const result = scrollMarginBottom()({ style$ScrollMarginBottom: 'inherit' });
    expect(result).toEqual({ scrollMarginBottom: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = scrollMarginBottom<'a'>()({ style$ScrollMarginBottom: 'a' });
    expect(result).toEqual({ scrollMarginBottom: 'a' });
  });

  it('should use an interface which marks `scrollMarginBottom` as optional', () => {
    const result = scrollMarginBottom<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = scrollMarginBottom<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$ScrollMarginBottom: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      scrollMarginBottom: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = scrollMarginBottom<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$ScrollMarginBottom: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      scrollMarginBottom: 'a',
      [theme.breakpoints.large]: {
        scrollMarginBottom: 'b',
      },
      [theme.breakpoints.medium]: {
        scrollMarginBottom: 'c',
      },
      [theme.breakpoints.small]: {
        scrollMarginBottom: 'd',
      },
    });
  });
});
