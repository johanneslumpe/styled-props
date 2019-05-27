import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { rotate } from '../rotate';

describe('rotate', () => {
  it('should return a function', () => {
    const result = rotate();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `rotate` as component and css prop', () => {
    const result = rotate()({ style$Rotate: 'inherit' });
    expect(result).toEqual({ rotate: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = rotate<'a'>()({ style$Rotate: 'a' });
    expect(result).toEqual({ rotate: 'a' });
  });

  it('should use an interface which marks `rotate` as optional', () => {
    const result = rotate<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = rotate<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$Rotate: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      rotate: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = rotate<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$Rotate: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      rotate: 'a',
      [theme.breakpoints.large]: {
        rotate: 'b',
      },
      [theme.breakpoints.medium]: {
        rotate: 'c',
      },
      [theme.breakpoints.small]: {
        rotate: 'd',
      },
    });
  });
});
