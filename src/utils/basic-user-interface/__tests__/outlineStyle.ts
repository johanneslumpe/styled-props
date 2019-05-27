import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { outlineStyle } from '../outlineStyle';

describe('outlineStyle', () => {
  it('should return a function', () => {
    const result = outlineStyle();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `outlineStyle` as component and css prop', () => {
    const result = outlineStyle()({ style$OutlineStyle: 'inherit' });
    expect(result).toEqual({ outlineStyle: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = outlineStyle<'a'>()({ style$OutlineStyle: 'a' });
    expect(result).toEqual({ outlineStyle: 'a' });
  });

  it('should use an interface which marks `outlineStyle` as optional', () => {
    const result = outlineStyle<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = outlineStyle<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$OutlineStyle: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      outlineStyle: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = outlineStyle<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$OutlineStyle: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      outlineStyle: 'a',
      [theme.breakpoints.large]: {
        outlineStyle: 'b',
      },
      [theme.breakpoints.medium]: {
        outlineStyle: 'c',
      },
      [theme.breakpoints.small]: {
        outlineStyle: 'd',
      },
    });
  });
});
