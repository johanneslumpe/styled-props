import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { borderTopWidth } from '../borderTopWidth';

describe('borderTopWidth', () => {
  it('should return a function', () => {
    const result = borderTopWidth();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `borderTopWidth` as component and css prop', () => {
    const result = borderTopWidth()({ style$BorderTopWidth: 'inherit' });
    expect(result).toEqual({ borderTopWidth: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderTopWidth<'a'>()({ style$BorderTopWidth: 'a' });
    expect(result).toEqual({ borderTopWidth: 'a' });
  });

  it('should use an interface which marks `borderTopWidth` as optional', () => {
    const result = borderTopWidth<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = borderTopWidth<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$BorderTopWidth: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      borderTopWidth: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderTopWidth<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$BorderTopWidth: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      borderTopWidth: 'a',
      [theme.breakpoints.large]: {
        borderTopWidth: 'b',
      },
      [theme.breakpoints.medium]: {
        borderTopWidth: 'c',
      },
      [theme.breakpoints.small]: {
        borderTopWidth: 'd',
      },
    });
  });
});
