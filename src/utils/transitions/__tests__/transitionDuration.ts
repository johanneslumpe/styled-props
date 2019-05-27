import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { transitionDuration } from '../transitionDuration';

describe('transitionDuration', () => {
  it('should return a function', () => {
    const result = transitionDuration();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `transitionDuration` as component and css prop', () => {
    const result = transitionDuration()({ style$TransitionDuration: 'inherit' });
    expect(result).toEqual({ transitionDuration: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = transitionDuration<'a'>()({ style$TransitionDuration: 'a' });
    expect(result).toEqual({ transitionDuration: 'a' });
  });

  it('should use an interface which marks `transitionDuration` as optional', () => {
    const result = transitionDuration<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = transitionDuration<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$TransitionDuration: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      transitionDuration: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = transitionDuration<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$TransitionDuration: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      transitionDuration: 'a',
      [theme.breakpoints.large]: {
        transitionDuration: 'b',
      },
      [theme.breakpoints.medium]: {
        transitionDuration: 'c',
      },
      [theme.breakpoints.small]: {
        transitionDuration: 'd',
      },
    });
  });
});
