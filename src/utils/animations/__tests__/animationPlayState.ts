import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { animationPlayState } from '../animationPlayState';

describe('animationPlayState', () => {
  it('should return a function', () => {
    const result = animationPlayState();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `animationPlayState` as component and css prop', () => {
    const result = animationPlayState()({ style$AnimationPlayState: 'inherit' });
    expect(result).toEqual({ animationPlayState: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = animationPlayState<'a'>()({ style$AnimationPlayState: 'a' });
    expect(result).toEqual({ animationPlayState: 'a' });
  });

  it('should use an interface which marks `animationPlayState` as optional', () => {
    const result = animationPlayState<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = animationPlayState<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$AnimationPlayState: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      animationPlayState: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = animationPlayState<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$AnimationPlayState: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      animationPlayState: 'a',
      [theme.breakpoints.large]: {
        animationPlayState: 'b',
      },
      [theme.breakpoints.medium]: {
        animationPlayState: 'c',
      },
      [theme.breakpoints.small]: {
        animationPlayState: 'd',
      },
    });
  });
});
