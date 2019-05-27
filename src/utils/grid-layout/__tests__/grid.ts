import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { grid } from '../grid';

describe('grid', () => {
  it('should return a function', () => {
    const result = grid();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `grid` as component and css prop', () => {
    const result = grid()({ style$Grid: 'inherit' });
    expect(result).toEqual({ grid: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = grid<'a'>()({ style$Grid: 'a' });
    expect(result).toEqual({ grid: 'a' });
  });

  it('should use an interface which marks `grid` as optional', () => {
    const result = grid<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = grid<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$Grid: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      grid: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = grid<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$Grid: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      grid: 'a',
      [theme.breakpoints.large]: {
        grid: 'b',
      },
      [theme.breakpoints.medium]: {
        grid: 'c',
      },
      [theme.breakpoints.small]: {
        grid: 'd',
      },
    });
  });
});
