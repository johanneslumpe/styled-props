import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { transition } from '../transition';

describe('transition', () => {
  it('should return a function', () => {
    const result = transition();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `transition` as component and css prop', () => {
    const result = transition()({ style$Transition: 'inherit' });
    expect(result).toEqual({ transition: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = transition<'a'>()({ style$Transition: 'a' });
    expect(result).toEqual({ transition: 'a' });
  });

  it('should use an interface which marks `transition` as optional', () => {
    const result = transition<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = transition<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$Transition: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      transition: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = transition<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$Transition: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      transition: 'a',
      [theme.breakpoints.large]: {
        transition: 'b',
      },
      [theme.breakpoints.medium]: {
        transition: 'c',
      },
      [theme.breakpoints.small]: {
        transition: 'd',
      },
    });
  });
});
