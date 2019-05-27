import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { animationTimingFunction } from '../animationTimingFunction';

describe('animationTimingFunction', () => {
  it('should return a function', () => {
    const result = animationTimingFunction();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `animationTimingFunction` as component and css prop', () => {
    const result = animationTimingFunction()({ style$AnimationTimingFunction: 'inherit' });
    expect(result).toEqual({ animationTimingFunction: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = animationTimingFunction<'a'>()({ style$AnimationTimingFunction: 'a' });
    expect(result).toEqual({ animationTimingFunction: 'a' });
  });

  it('should use an interface which marks `animationTimingFunction` as optional', () => {
    const result = animationTimingFunction<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = animationTimingFunction<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$AnimationTimingFunction: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      animationTimingFunction: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = animationTimingFunction<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$AnimationTimingFunction: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      animationTimingFunction: 'a',
      [theme.breakpoints.large]: {
        animationTimingFunction: 'b',
      },
      [theme.breakpoints.medium]: {
        animationTimingFunction: 'c',
      },
      [theme.breakpoints.small]: {
        animationTimingFunction: 'd',
      },
    });
  });
});
