import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { transitionTimingFunction } from '../transitionTimingFunction';

describe('transitionTimingFunction', () => {
  it('should return a function', () => {
    const result = transitionTimingFunction();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `transitionTimingFunction` as component and css prop', () => {
    const result = transitionTimingFunction()({ style$TransitionTimingFunction: 'inherit' });
    expect(result).toEqual({ transitionTimingFunction: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = transitionTimingFunction<'a'>()({ style$TransitionTimingFunction: 'a' });
    expect(result).toEqual({ transitionTimingFunction: 'a' });
  });

  it('should use an interface which marks `transitionTimingFunction` as optional', () => {
    const result = transitionTimingFunction<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = transitionTimingFunction<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$TransitionTimingFunction: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      transitionTimingFunction: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = transitionTimingFunction<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$TransitionTimingFunction: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      transitionTimingFunction: 'a',
      [theme.breakpoints.large]: {
        transitionTimingFunction: 'b',
      },
      [theme.breakpoints.medium]: {
        transitionTimingFunction: 'c',
      },
      [theme.breakpoints.small]: {
        transitionTimingFunction: 'd',
      },
    });
  });
});
