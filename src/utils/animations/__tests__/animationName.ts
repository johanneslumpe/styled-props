import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { animationName } from '../animationName';

describe('animationName', () => {
  it('should return a function', () => {
    const result = animationName();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `animationName` as component and css prop', () => {
    const result = animationName()({ style$AnimationName: 'inherit' });
    expect(result).toEqual({ animationName: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = animationName<'a'>()({ style$AnimationName: 'a' });
    expect(result).toEqual({ animationName: 'a' });
  });

  it('should use an interface which marks `animationName` as optional', () => {
    const result = animationName<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = animationName<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$AnimationName: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      animationName: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = animationName<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$AnimationName: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      animationName: 'a',
      [theme.breakpoints.large]: {
        animationName: 'b',
      },
      [theme.breakpoints.medium]: {
        animationName: 'c',
      },
      [theme.breakpoints.small]: {
        animationName: 'd',
      },
    });
  });
});
