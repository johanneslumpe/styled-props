import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { animationIterationCount } from '../animationIterationCount';

describe('animationIterationCount', () => {
  it('should return a function', () => {
    const result = animationIterationCount();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `animationIterationCount` as component and css prop', () => {
    const result = animationIterationCount()({ style$AnimationIterationCount: 'inherit' });
    expect(result).toEqual({ animationIterationCount: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = animationIterationCount<'a'>()({ style$AnimationIterationCount: 'a' });
    expect(result).toEqual({ animationIterationCount: 'a' });
  });

  it('should use an interface which marks `animationIterationCount` as optional', () => {
    const result = animationIterationCount<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = animationIterationCount<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$AnimationIterationCount: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      animationIterationCount: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = animationIterationCount<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$AnimationIterationCount: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      animationIterationCount: 'a',
      [theme.breakpoints.large]: {
        animationIterationCount: 'b',
      },
      [theme.breakpoints.medium]: {
        animationIterationCount: 'c',
      },
      [theme.breakpoints.small]: {
        animationIterationCount: 'd',
      },
    });
  });
});
