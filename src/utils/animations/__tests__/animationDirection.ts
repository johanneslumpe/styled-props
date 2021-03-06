import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { animationDirection } from '../animationDirection';

describe('animationDirection', () => {
  it('should return a function', () => {
    const result = animationDirection();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `animationDirection` as component and css prop', () => {
    const result = animationDirection()({ style$AnimationDirection: 'inherit' });
    expect(result).toEqual({ animationDirection: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = animationDirection<'a'>()({ style$AnimationDirection: 'a' });
    expect(result).toEqual({ animationDirection: 'a' });
  });

  it('should use an interface which marks `animationDirection` as optional', () => {
    const result = animationDirection<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = animationDirection<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$AnimationDirection: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      animationDirection: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = animationDirection<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$AnimationDirection: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      animationDirection: 'a',
      [theme.breakpoints.large]: {
        animationDirection: 'b',
      },
      [theme.breakpoints.medium]: {
        animationDirection: 'c',
      },
      [theme.breakpoints.small]: {
        animationDirection: 'd',
      },
    });
  });
});
