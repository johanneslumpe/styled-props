import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { scrollSnapStop } from '../scrollSnapStop';

describe('scrollSnapStop', () => {
  it('should return a function', () => {
    const result = scrollSnapStop();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `scrollSnapStop` as component and css prop', () => {
    const result = scrollSnapStop()({ style$ScrollSnapStop: 'inherit' });
    expect(result).toEqual({ scrollSnapStop: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = scrollSnapStop<'a'>()({ style$ScrollSnapStop: 'a' });
    expect(result).toEqual({ scrollSnapStop: 'a' });
  });

  it('should use an interface which marks `scrollSnapStop` as optional', () => {
    const result = scrollSnapStop<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = scrollSnapStop<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$ScrollSnapStop: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      scrollSnapStop: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = scrollSnapStop<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$ScrollSnapStop: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      scrollSnapStop: 'a',
      [theme.breakpoints.large]: {
        scrollSnapStop: 'b',
      },
      [theme.breakpoints.medium]: {
        scrollSnapStop: 'c',
      },
      [theme.breakpoints.small]: {
        scrollSnapStop: 'd',
      },
    });
  });
});
