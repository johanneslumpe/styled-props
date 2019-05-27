import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { overflowY } from '../overflowY';

describe('overflowY', () => {
  it('should return a function', () => {
    const result = overflowY();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `overflowY` as component and css prop', () => {
    const result = overflowY()({ style$OverflowY: 'inherit' });
    expect(result).toEqual({ overflowY: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = overflowY<'a'>()({ style$OverflowY: 'a' });
    expect(result).toEqual({ overflowY: 'a' });
  });

  it('should use an interface which marks `overflowY` as optional', () => {
    const result = overflowY<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = overflowY<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$OverflowY: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      overflowY: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = overflowY<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$OverflowY: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      overflowY: 'a',
      [theme.breakpoints.large]: {
        overflowY: 'b',
      },
      [theme.breakpoints.medium]: {
        overflowY: 'c',
      },
      [theme.breakpoints.small]: {
        overflowY: 'd',
      },
    });
  });
});
