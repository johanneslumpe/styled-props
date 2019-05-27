import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { inset } from '../inset';

describe('inset', () => {
  it('should return a function', () => {
    const result = inset();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `inset` as component and css prop', () => {
    const result = inset()({ style$Inset: 'inherit' });
    expect(result).toEqual({ inset: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = inset<'a'>()({ style$Inset: 'a' });
    expect(result).toEqual({ inset: 'a' });
  });

  it('should use an interface which marks `inset` as optional', () => {
    const result = inset<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = inset<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$Inset: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      inset: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = inset<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$Inset: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      inset: 'a',
      [theme.breakpoints.large]: {
        inset: 'b',
      },
      [theme.breakpoints.medium]: {
        inset: 'c',
      },
      [theme.breakpoints.small]: {
        inset: 'd',
      },
    });
  });
});
