import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { scrollbarWidth } from '../scrollbarWidth';

describe('scrollbarWidth', () => {
  it('should return a function', () => {
    const result = scrollbarWidth();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `scrollbarWidth` as component and css prop', () => {
    const result = scrollbarWidth()({ style$ScrollbarWidth: 'inherit' });
    expect(result).toEqual({ scrollbarWidth: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = scrollbarWidth<'a'>()({ style$ScrollbarWidth: 'a' });
    expect(result).toEqual({ scrollbarWidth: 'a' });
  });

  it('should use an interface which marks `scrollbarWidth` as optional', () => {
    const result = scrollbarWidth<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = scrollbarWidth<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$ScrollbarWidth: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      scrollbarWidth: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = scrollbarWidth<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$ScrollbarWidth: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      scrollbarWidth: 'a',
      [theme.breakpoints.large]: {
        scrollbarWidth: 'b',
      },
      [theme.breakpoints.medium]: {
        scrollbarWidth: 'c',
      },
      [theme.breakpoints.small]: {
        scrollbarWidth: 'd',
      },
    });
  });
});
