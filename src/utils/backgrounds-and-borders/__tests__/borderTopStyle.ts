import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { borderTopStyle } from '../borderTopStyle';

describe('borderTopStyle', () => {
  it('should return a function', () => {
    const result = borderTopStyle();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `borderTopStyle` as component and css prop', () => {
    const result = borderTopStyle()({ style$BorderTopStyle: 'inherit' });
    expect(result).toEqual({ borderTopStyle: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderTopStyle<'a'>()({ style$BorderTopStyle: 'a' });
    expect(result).toEqual({ borderTopStyle: 'a' });
  });

  it('should use an interface which marks `borderTopStyle` as optional', () => {
    const result = borderTopStyle<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = borderTopStyle<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$BorderTopStyle: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      borderTopStyle: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderTopStyle<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$BorderTopStyle: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      borderTopStyle: 'a',
      [theme.breakpoints.large]: {
        borderTopStyle: 'b',
      },
      [theme.breakpoints.medium]: {
        borderTopStyle: 'c',
      },
      [theme.breakpoints.small]: {
        borderTopStyle: 'd',
      },
    });
  });
});
