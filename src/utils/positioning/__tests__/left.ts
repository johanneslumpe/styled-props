import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { left } from '../left';

describe('left', () => {
  it('should return a function', () => {
    const result = left();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `left` as component and css prop', () => {
    const result = left()({ style$Left: 'inherit' });
    expect(result).toEqual({ left: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = left<'a'>()({ style$Left: 'a' });
    expect(result).toEqual({ left: 'a' });
  });

  it('should use an interface which marks `left` as optional', () => {
    const result = left<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = left<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$Left: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      left: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = left<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$Left: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      left: 'a',
      [theme.breakpoints.large]: {
        left: 'b',
      },
      [theme.breakpoints.medium]: {
        left: 'c',
      },
      [theme.breakpoints.small]: {
        left: 'd',
      },
    });
  });
});
