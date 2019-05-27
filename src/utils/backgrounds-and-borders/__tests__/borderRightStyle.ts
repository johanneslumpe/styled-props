import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { borderRightStyle } from '../borderRightStyle';

describe('borderRightStyle', () => {
  it('should return a function', () => {
    const result = borderRightStyle();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `borderRightStyle` as component and css prop', () => {
    const result = borderRightStyle()({ style$BorderRightStyle: 'inherit' });
    expect(result).toEqual({ borderRightStyle: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderRightStyle<'a'>()({ style$BorderRightStyle: 'a' });
    expect(result).toEqual({ borderRightStyle: 'a' });
  });

  it('should use an interface which marks `borderRightStyle` as optional', () => {
    const result = borderRightStyle<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = borderRightStyle<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$BorderRightStyle: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      borderRightStyle: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderRightStyle<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$BorderRightStyle: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      borderRightStyle: 'a',
      [theme.breakpoints.large]: {
        borderRightStyle: 'b',
      },
      [theme.breakpoints.medium]: {
        borderRightStyle: 'c',
      },
      [theme.breakpoints.small]: {
        borderRightStyle: 'd',
      },
    });
  });
});
