import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { borderImage } from '../borderImage';

describe('borderImage', () => {
  it('should return a function', () => {
    const result = borderImage();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `borderImage` as component and css prop', () => {
    const result = borderImage()({ style$BorderImage: 'inherit' });
    expect(result).toEqual({ borderImage: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderImage<'a'>()({ style$BorderImage: 'a' });
    expect(result).toEqual({ borderImage: 'a' });
  });

  it('should use an interface which marks `borderImage` as optional', () => {
    const result = borderImage<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = borderImage<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$BorderImage: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      borderImage: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderImage<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$BorderImage: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      borderImage: 'a',
      [theme.breakpoints.large]: {
        borderImage: 'b',
      },
      [theme.breakpoints.medium]: {
        borderImage: 'c',
      },
      [theme.breakpoints.small]: {
        borderImage: 'd',
      },
    });
  });
});
