import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { clipPath } from '../clipPath';

describe('clipPath', () => {
  it('should return a function', () => {
    const result = clipPath();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `clipPath` as component and css prop', () => {
    const result = clipPath()({ style$ClipPath: 'inherit' });
    expect(result).toEqual({ clipPath: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = clipPath<'a'>()({ style$ClipPath: 'a' });
    expect(result).toEqual({ clipPath: 'a' });
  });

  it('should use an interface which marks `clipPath` as optional', () => {
    const result = clipPath<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = clipPath<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$ClipPath: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      clipPath: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = clipPath<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$ClipPath: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      clipPath: 'a',
      [theme.breakpoints.large]: {
        clipPath: 'b',
      },
      [theme.breakpoints.medium]: {
        clipPath: 'c',
      },
      [theme.breakpoints.small]: {
        clipPath: 'd',
      },
    });
  });
});
