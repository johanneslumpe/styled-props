import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { transitionDelay } from '../transitionDelay';

describe('transitionDelay', () => {
  it('should return a function', () => {
    const result = transitionDelay();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `transitionDelay` as component and css prop', () => {
    const result = transitionDelay()({ style$TransitionDelay: 'inherit' });
    expect(result).toEqual({ transitionDelay: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = transitionDelay<'a'>()({ style$TransitionDelay: 'a' });
    expect(result).toEqual({ transitionDelay: 'a' });
  });

  it('should use an interface which marks `transitionDelay` as optional', () => {
    const result = transitionDelay<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = transitionDelay<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$TransitionDelay: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      transitionDelay: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = transitionDelay<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$TransitionDelay: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      transitionDelay: 'a',
      [theme.breakpoints.large]: {
        transitionDelay: 'b',
      },
      [theme.breakpoints.medium]: {
        transitionDelay: 'c',
      },
      [theme.breakpoints.small]: {
        transitionDelay: 'd',
      },
    });
  });
});
