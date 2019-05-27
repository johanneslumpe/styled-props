import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { borderInlineEndStyle } from '../borderInlineEndStyle';

describe('borderInlineEndStyle', () => {
  it('should return a function', () => {
    const result = borderInlineEndStyle();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `borderInlineEndStyle` as component and css prop', () => {
    const result = borderInlineEndStyle()({ style$BorderInlineEndStyle: 'inherit' });
    expect(result).toEqual({ borderInlineEndStyle: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderInlineEndStyle<'a'>()({ style$BorderInlineEndStyle: 'a' });
    expect(result).toEqual({ borderInlineEndStyle: 'a' });
  });

  it('should use an interface which marks `borderInlineEndStyle` as optional', () => {
    const result = borderInlineEndStyle<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = borderInlineEndStyle<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$BorderInlineEndStyle: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      borderInlineEndStyle: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderInlineEndStyle<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$BorderInlineEndStyle: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      borderInlineEndStyle: 'a',
      [theme.breakpoints.large]: {
        borderInlineEndStyle: 'b',
      },
      [theme.breakpoints.medium]: {
        borderInlineEndStyle: 'c',
      },
      [theme.breakpoints.small]: {
        borderInlineEndStyle: 'd',
      },
    });
  });
});
