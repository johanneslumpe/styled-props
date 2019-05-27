import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { textIndent } from '../textIndent';

describe('textIndent', () => {
  it('should return a function', () => {
    const result = textIndent();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `textIndent` as component and css prop', () => {
    const result = textIndent()({ style$TextIndent: 'inherit' });
    expect(result).toEqual({ textIndent: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = textIndent<'a'>()({ style$TextIndent: 'a' });
    expect(result).toEqual({ textIndent: 'a' });
  });

  it('should use an interface which marks `textIndent` as optional', () => {
    const result = textIndent<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = textIndent<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$TextIndent: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      textIndent: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = textIndent<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$TextIndent: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      textIndent: 'a',
      [theme.breakpoints.large]: {
        textIndent: 'b',
      },
      [theme.breakpoints.medium]: {
        textIndent: 'c',
      },
      [theme.breakpoints.small]: {
        textIndent: 'd',
      },
    });
  });
});
