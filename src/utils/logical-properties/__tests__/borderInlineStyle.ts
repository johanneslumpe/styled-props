import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { borderInlineStyle } from '../borderInlineStyle';

describe('borderInlineStyle', () => {
  it('should return a function', () => {
    const result = borderInlineStyle();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `borderInlineStyle` as component and css prop', () => {
    const result = borderInlineStyle()({ style$BorderInlineStyle: 'inherit' });
    expect(result).toEqual({ borderInlineStyle: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderInlineStyle<'a'>()({ style$BorderInlineStyle: 'a' });
    expect(result).toEqual({ borderInlineStyle: 'a' });
  });

  it('should use an interface which marks `borderInlineStyle` as optional', () => {
    const result = borderInlineStyle<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = borderInlineStyle<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$BorderInlineStyle: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      borderInlineStyle: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderInlineStyle<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$BorderInlineStyle: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      borderInlineStyle: 'a',
      [theme.breakpoints.large]: {
        borderInlineStyle: 'b',
      },
      [theme.breakpoints.medium]: {
        borderInlineStyle: 'c',
      },
      [theme.breakpoints.small]: {
        borderInlineStyle: 'd',
      },
    });
  });
});
