import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { imageRendering } from '../imageRendering';

describe('imageRendering', () => {
  it('should return a function', () => {
    const result = imageRendering();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `imageRendering` as component and css prop', () => {
    const result = imageRendering()({ style$ImageRendering: 'inherit' });
    expect(result).toEqual({ imageRendering: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = imageRendering<'a'>()({ style$ImageRendering: 'a' });
    expect(result).toEqual({ imageRendering: 'a' });
  });

  it('should use an interface which marks `imageRendering` as optional', () => {
    const result = imageRendering<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = imageRendering<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$ImageRendering: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      imageRendering: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = imageRendering<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$ImageRendering: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      imageRendering: 'a',
      [theme.breakpoints.large]: {
        imageRendering: 'b',
      },
      [theme.breakpoints.medium]: {
        imageRendering: 'c',
      },
      [theme.breakpoints.small]: {
        imageRendering: 'd',
      },
    });
  });
});
