import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { backgroundBlendMode } from '../backgroundBlendMode';

describe('backgroundBlendMode', () => {
  it('should return a function', () => {
    const result = backgroundBlendMode();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `backgroundBlendMode` as component and css prop', () => {
    const result = backgroundBlendMode()({ style$BackgroundBlendMode: 'inherit' });
    expect(result).toEqual({ backgroundBlendMode: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = backgroundBlendMode<'a'>()({ style$BackgroundBlendMode: 'a' });
    expect(result).toEqual({ backgroundBlendMode: 'a' });
  });

  it('should use an interface which marks `backgroundBlendMode` as optional', () => {
    const result = backgroundBlendMode<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = backgroundBlendMode<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$BackgroundBlendMode: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      backgroundBlendMode: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = backgroundBlendMode<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$BackgroundBlendMode: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      backgroundBlendMode: 'a',
      [theme.breakpoints.large]: {
        backgroundBlendMode: 'b',
      },
      [theme.breakpoints.medium]: {
        backgroundBlendMode: 'c',
      },
      [theme.breakpoints.small]: {
        backgroundBlendMode: 'd',
      },
    });
  });
});
