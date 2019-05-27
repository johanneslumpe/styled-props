import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { animationFillMode } from '../animationFillMode';

describe('animationFillMode', () => {
  it('should return a function', () => {
    const result = animationFillMode();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `animationFillMode` as component and css prop', () => {
    const result = animationFillMode()({ style$AnimationFillMode: 'inherit' });
    expect(result).toEqual({ animationFillMode: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = animationFillMode<'a'>()({ style$AnimationFillMode: 'a' });
    expect(result).toEqual({ animationFillMode: 'a' });
  });

  it('should use an interface which marks `animationFillMode` as optional', () => {
    const result = animationFillMode<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = animationFillMode<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$AnimationFillMode: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      animationFillMode: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = animationFillMode<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$AnimationFillMode: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      animationFillMode: 'a',
      [theme.breakpoints.large]: {
        animationFillMode: 'b',
      },
      [theme.breakpoints.medium]: {
        animationFillMode: 'c',
      },
      [theme.breakpoints.small]: {
        animationFillMode: 'd',
      },
    });
  });
});
