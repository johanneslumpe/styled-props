import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { scrollbarColor } from '../scrollbarColor';

describe('scrollbarColor', () => {
  it('should return a function', () => {
    const result = scrollbarColor();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `scrollbarColor` as component and css prop', () => {
    const result = scrollbarColor()({ style$ScrollbarColor: 'inherit' });
    expect(result).toEqual({ scrollbarColor: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = scrollbarColor<'a'>()({ style$ScrollbarColor: 'a' });
    expect(result).toEqual({ scrollbarColor: 'a' });
  });

  it('should use an interface which marks `scrollbarColor` as optional', () => {
    const result = scrollbarColor<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = scrollbarColor<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$ScrollbarColor: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      scrollbarColor: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = scrollbarColor<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$ScrollbarColor: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      scrollbarColor: 'a',
      [theme.breakpoints.large]: {
        scrollbarColor: 'b',
      },
      [theme.breakpoints.medium]: {
        scrollbarColor: 'c',
      },
      [theme.breakpoints.small]: {
        scrollbarColor: 'd',
      },
    });
  });
});
