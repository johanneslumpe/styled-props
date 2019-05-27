import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { borderRightWidth } from '../borderRightWidth';

describe('borderRightWidth', () => {
  it('should return a function', () => {
    const result = borderRightWidth();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `borderRightWidth` as component and css prop', () => {
    const result = borderRightWidth()({ style$BorderRightWidth: 'inherit' });
    expect(result).toEqual({ borderRightWidth: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderRightWidth<'a'>()({ style$BorderRightWidth: 'a' });
    expect(result).toEqual({ borderRightWidth: 'a' });
  });

  it('should use an interface which marks `borderRightWidth` as optional', () => {
    const result = borderRightWidth<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = borderRightWidth<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$BorderRightWidth: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      borderRightWidth: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderRightWidth<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$BorderRightWidth: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      borderRightWidth: 'a',
      [theme.breakpoints.large]: {
        borderRightWidth: 'b',
      },
      [theme.breakpoints.medium]: {
        borderRightWidth: 'c',
      },
      [theme.breakpoints.small]: {
        borderRightWidth: 'd',
      },
    });
  });
});
