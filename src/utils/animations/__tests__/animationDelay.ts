import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { animationDelay } from '../animationDelay';

describe('animationDelay', () => {
  it('should return a function', () => {
    const result = animationDelay();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `animationDelay` as component and css prop', () => {
    const result = animationDelay()({ style$AnimationDelay: 'inherit' });
    expect(result).toEqual({ animationDelay: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = animationDelay<'a'>()({ style$AnimationDelay: 'a' });
    expect(result).toEqual({ animationDelay: 'a' });
  });

  it('should use an interface which marks `animationDelay` as optional', () => {
    const result = animationDelay<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = animationDelay<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$AnimationDelay: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      animationDelay: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = animationDelay<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$AnimationDelay: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      animationDelay: 'a',
      [theme.breakpoints.large]: {
        animationDelay: 'b',
      },
      [theme.breakpoints.medium]: {
        animationDelay: 'c',
      },
      [theme.breakpoints.small]: {
        animationDelay: 'd',
      },
    });
  });
});
