import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { outlineOffset } from '../outlineOffset';

describe('outlineOffset', () => {
  it('should return a function', () => {
    const result = outlineOffset();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `outlineOffset` as component and css prop', () => {
    const result = outlineOffset()({ style$OutlineOffset: 'inherit' });
    expect(result).toEqual({ outlineOffset: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = outlineOffset<'a'>()({ style$OutlineOffset: 'a' });
    expect(result).toEqual({ outlineOffset: 'a' });
  });

  it('should use an interface which marks `outlineOffset` as optional', () => {
    const result = outlineOffset<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = outlineOffset<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$OutlineOffset: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      outlineOffset: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = outlineOffset<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$OutlineOffset: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      outlineOffset: 'a',
      [theme.breakpoints.large]: {
        outlineOffset: 'b',
      },
      [theme.breakpoints.medium]: {
        outlineOffset: 'c',
      },
      [theme.breakpoints.small]: {
        outlineOffset: 'd',
      },
    });
  });
});
