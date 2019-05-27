import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { maskImage } from '../maskImage';

describe('maskImage', () => {
  it('should return a function', () => {
    const result = maskImage();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `maskImage` as component and css prop', () => {
    const result = maskImage()({ style$MaskImage: 'inherit' });
    expect(result).toEqual({ maskImage: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = maskImage<'a'>()({ style$MaskImage: 'a' });
    expect(result).toEqual({ maskImage: 'a' });
  });

  it('should use an interface which marks `maskImage` as optional', () => {
    const result = maskImage<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = maskImage<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$MaskImage: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      maskImage: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = maskImage<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$MaskImage: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      maskImage: 'a',
      [theme.breakpoints.large]: {
        maskImage: 'b',
      },
      [theme.breakpoints.medium]: {
        maskImage: 'c',
      },
      [theme.breakpoints.small]: {
        maskImage: 'd',
      },
    });
  });
});
