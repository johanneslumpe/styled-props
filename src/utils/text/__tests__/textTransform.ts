import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { textTransform } from '../textTransform';

describe('textTransform', () => {
  it('should return a function', () => {
    const result = textTransform();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `textTransform` as component and css prop', () => {
    const result = textTransform()({ style$TextTransform: 'inherit' });
    expect(result).toEqual({ textTransform: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = textTransform<'a'>()({ style$TextTransform: 'a' });
    expect(result).toEqual({ textTransform: 'a' });
  });

  it('should use an interface which marks `textTransform` as optional', () => {
    const result = textTransform<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = textTransform<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$TextTransform: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      textTransform: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = textTransform<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$TextTransform: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      textTransform: 'a',
      [theme.breakpoints.large]: {
        textTransform: 'b',
      },
      [theme.breakpoints.medium]: {
        textTransform: 'c',
      },
      [theme.breakpoints.small]: {
        textTransform: 'd',
      },
    });
  });
});
