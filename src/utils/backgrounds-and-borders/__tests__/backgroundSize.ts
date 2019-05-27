import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { backgroundSize } from '../backgroundSize';

describe('backgroundSize', () => {
  it('should return a function', () => {
    const result = backgroundSize();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `backgroundSize` as component and css prop', () => {
    const result = backgroundSize()({ style$BackgroundSize: 'inherit' });
    expect(result).toEqual({ backgroundSize: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = backgroundSize<'a'>()({ style$BackgroundSize: 'a' });
    expect(result).toEqual({ backgroundSize: 'a' });
  });

  it('should use an interface which marks `backgroundSize` as optional', () => {
    const result = backgroundSize<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = backgroundSize<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$BackgroundSize: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      backgroundSize: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = backgroundSize<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$BackgroundSize: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      backgroundSize: 'a',
      [theme.breakpoints.large]: {
        backgroundSize: 'b',
      },
      [theme.breakpoints.medium]: {
        backgroundSize: 'c',
      },
      [theme.breakpoints.small]: {
        backgroundSize: 'd',
      },
    });
  });
});
