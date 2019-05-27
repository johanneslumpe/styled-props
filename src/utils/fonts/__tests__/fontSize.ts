import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { fontSize } from '../fontSize';

describe('fontSize', () => {
  it('should return a function', () => {
    const result = fontSize();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `fontSize` as component and css prop', () => {
    const result = fontSize()({ style$FontSize: 'inherit' });
    expect(result).toEqual({ fontSize: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = fontSize<'a'>()({ style$FontSize: 'a' });
    expect(result).toEqual({ fontSize: 'a' });
  });

  it('should use an interface which marks `fontSize` as optional', () => {
    const result = fontSize<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = fontSize<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$FontSize: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      fontSize: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = fontSize<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$FontSize: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      fontSize: 'a',
      [theme.breakpoints.large]: {
        fontSize: 'b',
      },
      [theme.breakpoints.medium]: {
        fontSize: 'c',
      },
      [theme.breakpoints.small]: {
        fontSize: 'd',
      },
    });
  });
});
