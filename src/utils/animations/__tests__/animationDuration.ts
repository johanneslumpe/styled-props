import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { animationDuration } from '../animationDuration';

describe('animationDuration', () => {
  it('should return a function', () => {
    const result = animationDuration();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `animationDuration` as component and css prop', () => {
    const result = animationDuration()({ style$AnimationDuration: 'inherit' });
    expect(result).toEqual({ animationDuration: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = animationDuration<'a'>()({ style$AnimationDuration: 'a' });
    expect(result).toEqual({ animationDuration: 'a' });
  });

  it('should use an interface which marks `animationDuration` as optional', () => {
    const result = animationDuration<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = animationDuration<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$AnimationDuration: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      animationDuration: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = animationDuration<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$AnimationDuration: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      animationDuration: 'a',
      [theme.breakpoints.large]: {
        animationDuration: 'b',
      },
      [theme.breakpoints.medium]: {
        animationDuration: 'c',
      },
      [theme.breakpoints.small]: {
        animationDuration: 'd',
      },
    });
  });
});
