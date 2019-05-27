import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { maskOrigin } from '../maskOrigin';

describe('maskOrigin', () => {
  it('should return a function', () => {
    const result = maskOrigin();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `maskOrigin` as component and css prop', () => {
    const result = maskOrigin()({ style$MaskOrigin: 'inherit' });
    expect(result).toEqual({ maskOrigin: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = maskOrigin<'a'>()({ style$MaskOrigin: 'a' });
    expect(result).toEqual({ maskOrigin: 'a' });
  });

  it('should use an interface which marks `maskOrigin` as optional', () => {
    const result = maskOrigin<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = maskOrigin<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$MaskOrigin: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      maskOrigin: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = maskOrigin<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$MaskOrigin: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      maskOrigin: 'a',
      [theme.breakpoints.large]: {
        maskOrigin: 'b',
      },
      [theme.breakpoints.medium]: {
        maskOrigin: 'c',
      },
      [theme.breakpoints.small]: {
        maskOrigin: 'd',
      },
    });
  });
});
