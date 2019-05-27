import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { textDecoration } from '../textDecoration';

describe('textDecoration', () => {
  it('should return a function', () => {
    const result = textDecoration();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `textDecoration` as component and css prop', () => {
    const result = textDecoration()({ style$TextDecoration: 'inherit' });
    expect(result).toEqual({ textDecoration: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = textDecoration<'a'>()({ style$TextDecoration: 'a' });
    expect(result).toEqual({ textDecoration: 'a' });
  });

  it('should use an interface which marks `textDecoration` as optional', () => {
    const result = textDecoration<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = textDecoration<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$TextDecoration: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      textDecoration: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = textDecoration<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$TextDecoration: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      textDecoration: 'a',
      [theme.breakpoints.large]: {
        textDecoration: 'b',
      },
      [theme.breakpoints.medium]: {
        textDecoration: 'c',
      },
      [theme.breakpoints.small]: {
        textDecoration: 'd',
      },
    });
  });
});
