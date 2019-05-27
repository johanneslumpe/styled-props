import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { backgroundClip } from '../backgroundClip';

describe('backgroundClip', () => {
  it('should return a function', () => {
    const result = backgroundClip();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `backgroundClip` as component and css prop', () => {
    const result = backgroundClip()({ style$BackgroundClip: 'inherit' });
    expect(result).toEqual({ backgroundClip: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = backgroundClip<'a'>()({ style$BackgroundClip: 'a' });
    expect(result).toEqual({ backgroundClip: 'a' });
  });

  it('should use an interface which marks `backgroundClip` as optional', () => {
    const result = backgroundClip<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = backgroundClip<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$BackgroundClip: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      backgroundClip: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = backgroundClip<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$BackgroundClip: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      backgroundClip: 'a',
      [theme.breakpoints.large]: {
        backgroundClip: 'b',
      },
      [theme.breakpoints.medium]: {
        backgroundClip: 'c',
      },
      [theme.breakpoints.small]: {
        backgroundClip: 'd',
      },
    });
  });
});
