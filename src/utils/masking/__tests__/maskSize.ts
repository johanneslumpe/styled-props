import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { maskSize } from '../maskSize';

describe('maskSize', () => {
  it('should return a function', () => {
    const result = maskSize();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `maskSize` as component and css prop', () => {
    const result = maskSize()({ style$MaskSize: 'inherit' });
    expect(result).toEqual({ maskSize: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = maskSize<'a'>()({ style$MaskSize: 'a' });
    expect(result).toEqual({ maskSize: 'a' });
  });

  it('should use an interface which marks `maskSize` as optional', () => {
    const result = maskSize<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = maskSize<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$MaskSize: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      maskSize: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = maskSize<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$MaskSize: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      maskSize: 'a',
      [theme.breakpoints.large]: {
        maskSize: 'b',
      },
      [theme.breakpoints.medium]: {
        maskSize: 'c',
      },
      [theme.breakpoints.small]: {
        maskSize: 'd',
      },
    });
  });
});
