import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { caretColor } from '../caretColor';

describe('caretColor', () => {
  it('should return a function', () => {
    const result = caretColor();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `caretColor` as component and css prop', () => {
    const result = caretColor()({ style$CaretColor: 'inherit' });
    expect(result).toEqual({ caretColor: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = caretColor<'a'>()({ style$CaretColor: 'a' });
    expect(result).toEqual({ caretColor: 'a' });
  });

  it('should use an interface which marks `caretColor` as optional', () => {
    const result = caretColor<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = caretColor<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$CaretColor: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      caretColor: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = caretColor<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$CaretColor: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      caretColor: 'a',
      [theme.breakpoints.large]: {
        caretColor: 'b',
      },
      [theme.breakpoints.medium]: {
        caretColor: 'c',
      },
      [theme.breakpoints.small]: {
        caretColor: 'd',
      },
    });
  });
});
