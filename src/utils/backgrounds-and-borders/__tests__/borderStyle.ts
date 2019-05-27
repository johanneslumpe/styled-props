import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { borderStyle } from '../borderStyle';

describe('borderStyle', () => {
  it('should return a function', () => {
    const result = borderStyle();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `borderStyle` as component and css prop', () => {
    const result = borderStyle()({ style$BorderStyle: 'inherit' });
    expect(result).toEqual({ borderStyle: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderStyle<'a'>()({ style$BorderStyle: 'a' });
    expect(result).toEqual({ borderStyle: 'a' });
  });

  it('should use an interface which marks `borderStyle` as optional', () => {
    const result = borderStyle<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = borderStyle<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$BorderStyle: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      borderStyle: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderStyle<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$BorderStyle: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      borderStyle: 'a',
      [theme.breakpoints.large]: {
        borderStyle: 'b',
      },
      [theme.breakpoints.medium]: {
        borderStyle: 'c',
      },
      [theme.breakpoints.small]: {
        borderStyle: 'd',
      },
    });
  });
});
