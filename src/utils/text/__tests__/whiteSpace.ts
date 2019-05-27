import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { whiteSpace } from '../whiteSpace';

describe('whiteSpace', () => {
  it('should return a function', () => {
    const result = whiteSpace();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `whiteSpace` as component and css prop', () => {
    const result = whiteSpace()({ style$WhiteSpace: 'inherit' });
    expect(result).toEqual({ whiteSpace: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = whiteSpace<'a'>()({ style$WhiteSpace: 'a' });
    expect(result).toEqual({ whiteSpace: 'a' });
  });

  it('should use an interface which marks `whiteSpace` as optional', () => {
    const result = whiteSpace<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = whiteSpace<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$WhiteSpace: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      whiteSpace: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = whiteSpace<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$WhiteSpace: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      whiteSpace: 'a',
      [theme.breakpoints.large]: {
        whiteSpace: 'b',
      },
      [theme.breakpoints.medium]: {
        whiteSpace: 'c',
      },
      [theme.breakpoints.small]: {
        whiteSpace: 'd',
      },
    });
  });
});
