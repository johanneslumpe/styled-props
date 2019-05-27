import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { scrollSnapType } from '../scrollSnapType';

describe('scrollSnapType', () => {
  it('should return a function', () => {
    const result = scrollSnapType();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `scrollSnapType` as component and css prop', () => {
    const result = scrollSnapType()({ style$ScrollSnapType: 'inherit' });
    expect(result).toEqual({ scrollSnapType: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = scrollSnapType<'a'>()({ style$ScrollSnapType: 'a' });
    expect(result).toEqual({ scrollSnapType: 'a' });
  });

  it('should use an interface which marks `scrollSnapType` as optional', () => {
    const result = scrollSnapType<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = scrollSnapType<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$ScrollSnapType: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      scrollSnapType: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = scrollSnapType<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$ScrollSnapType: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      scrollSnapType: 'a',
      [theme.breakpoints.large]: {
        scrollSnapType: 'b',
      },
      [theme.breakpoints.medium]: {
        scrollSnapType: 'c',
      },
      [theme.breakpoints.small]: {
        scrollSnapType: 'd',
      },
    });
  });
});
