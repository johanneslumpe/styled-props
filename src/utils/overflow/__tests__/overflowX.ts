import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { overflowX } from '../overflowX';

describe('overflowX', () => {
  it('should return a function', () => {
    const result = overflowX();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `overflowX` as component and css prop', () => {
    const result = overflowX()({ style$OverflowX: 'inherit' });
    expect(result).toEqual({ overflowX: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = overflowX<'a'>()({ style$OverflowX: 'a' });
    expect(result).toEqual({ overflowX: 'a' });
  });

  it('should use an interface which marks `overflowX` as optional', () => {
    const result = overflowX<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = overflowX<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$OverflowX: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      overflowX: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = overflowX<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$OverflowX: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      overflowX: 'a',
      [theme.breakpoints.large]: {
        overflowX: 'b',
      },
      [theme.breakpoints.medium]: {
        overflowX: 'c',
      },
      [theme.breakpoints.small]: {
        overflowX: 'd',
      },
    });
  });
});
