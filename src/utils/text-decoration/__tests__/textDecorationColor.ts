import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { textDecorationColor } from '../textDecorationColor';

describe('textDecorationColor', () => {
  it('should return a function', () => {
    const result = textDecorationColor();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `textDecorationColor` as component and css prop', () => {
    const result = textDecorationColor()({ style$TextDecorationColor: 'inherit' });
    expect(result).toEqual({ textDecorationColor: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = textDecorationColor<'a'>()({ style$TextDecorationColor: 'a' });
    expect(result).toEqual({ textDecorationColor: 'a' });
  });

  it('should use an interface which marks `textDecorationColor` as optional', () => {
    const result = textDecorationColor<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = textDecorationColor<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$TextDecorationColor: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      textDecorationColor: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = textDecorationColor<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$TextDecorationColor: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      textDecorationColor: 'a',
      [theme.breakpoints.large]: {
        textDecorationColor: 'b',
      },
      [theme.breakpoints.medium]: {
        textDecorationColor: 'c',
      },
      [theme.breakpoints.small]: {
        textDecorationColor: 'd',
      },
    });
  });
});
