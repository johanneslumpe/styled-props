import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { transformOrigin } from '../transformOrigin';

describe('transformOrigin', () => {
  it('should return a function', () => {
    const result = transformOrigin();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `transformOrigin` as component and css prop', () => {
    const result = transformOrigin()({ style$TransformOrigin: 'inherit' });
    expect(result).toEqual({ transformOrigin: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = transformOrigin<'a'>()({ style$TransformOrigin: 'a' });
    expect(result).toEqual({ transformOrigin: 'a' });
  });

  it('should use an interface which marks `transformOrigin` as optional', () => {
    const result = transformOrigin<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = transformOrigin<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$TransformOrigin: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      transformOrigin: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = transformOrigin<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$TransformOrigin: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      transformOrigin: 'a',
      [theme.breakpoints.large]: {
        transformOrigin: 'b',
      },
      [theme.breakpoints.medium]: {
        transformOrigin: 'c',
      },
      [theme.breakpoints.small]: {
        transformOrigin: 'd',
      },
    });
  });
});
