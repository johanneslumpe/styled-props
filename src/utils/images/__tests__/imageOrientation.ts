import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { imageOrientation } from '../imageOrientation';

describe('imageOrientation', () => {
  it('should return a function', () => {
    const result = imageOrientation();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `imageOrientation` as component and css prop', () => {
    const result = imageOrientation()({ style$ImageOrientation: 'inherit' });
    expect(result).toEqual({ imageOrientation: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = imageOrientation<'a'>()({ style$ImageOrientation: 'a' });
    expect(result).toEqual({ imageOrientation: 'a' });
  });

  it('should use an interface which marks `imageOrientation` as optional', () => {
    const result = imageOrientation<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = imageOrientation<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$ImageOrientation: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      imageOrientation: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = imageOrientation<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$ImageOrientation: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      imageOrientation: 'a',
      [theme.breakpoints.large]: {
        imageOrientation: 'b',
      },
      [theme.breakpoints.medium]: {
        imageOrientation: 'c',
      },
      [theme.breakpoints.small]: {
        imageOrientation: 'd',
      },
    });
  });
});
