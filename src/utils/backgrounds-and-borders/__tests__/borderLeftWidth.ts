import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { borderLeftWidth } from '../borderLeftWidth';

describe('borderLeftWidth', () => {
  it('should return a function', () => {
    const result = borderLeftWidth();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `borderLeftWidth` as component and css prop', () => {
    const result = borderLeftWidth()({ style$BorderLeftWidth: 'inherit' });
    expect(result).toEqual({ borderLeftWidth: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderLeftWidth<'a'>()({ style$BorderLeftWidth: 'a' });
    expect(result).toEqual({ borderLeftWidth: 'a' });
  });

  it('should use an interface which marks `borderLeftWidth` as optional', () => {
    const result = borderLeftWidth<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = borderLeftWidth<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$BorderLeftWidth: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      borderLeftWidth: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderLeftWidth<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$BorderLeftWidth: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      borderLeftWidth: 'a',
      [theme.breakpoints.large]: {
        borderLeftWidth: 'b',
      },
      [theme.breakpoints.medium]: {
        borderLeftWidth: 'c',
      },
      [theme.breakpoints.small]: {
        borderLeftWidth: 'd',
      },
    });
  });
});
