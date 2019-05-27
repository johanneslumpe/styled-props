import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { scrollSnapAlign } from '../scrollSnapAlign';

describe('scrollSnapAlign', () => {
  it('should return a function', () => {
    const result = scrollSnapAlign();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `scrollSnapAlign` as component and css prop', () => {
    const result = scrollSnapAlign()({ style$ScrollSnapAlign: 'inherit' });
    expect(result).toEqual({ scrollSnapAlign: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = scrollSnapAlign<'a'>()({ style$ScrollSnapAlign: 'a' });
    expect(result).toEqual({ scrollSnapAlign: 'a' });
  });

  it('should use an interface which marks `scrollSnapAlign` as optional', () => {
    const result = scrollSnapAlign<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = scrollSnapAlign<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$ScrollSnapAlign: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      scrollSnapAlign: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = scrollSnapAlign<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$ScrollSnapAlign: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      scrollSnapAlign: 'a',
      [theme.breakpoints.large]: {
        scrollSnapAlign: 'b',
      },
      [theme.breakpoints.medium]: {
        scrollSnapAlign: 'c',
      },
      [theme.breakpoints.small]: {
        scrollSnapAlign: 'd',
      },
    });
  });
});
