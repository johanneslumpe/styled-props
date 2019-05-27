import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { hyphens } from '../hyphens';

describe('hyphens', () => {
  it('should return a function', () => {
    const result = hyphens();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `hyphens` as component and css prop', () => {
    const result = hyphens()({ style$Hyphens: 'inherit' });
    expect(result).toEqual({ hyphens: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = hyphens<'a'>()({ style$Hyphens: 'a' });
    expect(result).toEqual({ hyphens: 'a' });
  });

  it('should use an interface which marks `hyphens` as optional', () => {
    const result = hyphens<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = hyphens<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$Hyphens: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      hyphens: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = hyphens<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$Hyphens: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      hyphens: 'a',
      [theme.breakpoints.large]: {
        hyphens: 'b',
      },
      [theme.breakpoints.medium]: {
        hyphens: 'c',
      },
      [theme.breakpoints.small]: {
        hyphens: 'd',
      },
    });
  });
});
