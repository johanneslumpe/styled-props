import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { backgroundOrigin } from '../backgroundOrigin';

describe('backgroundOrigin', () => {
  it('should return a function', () => {
    const result = backgroundOrigin();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `backgroundOrigin` as component and css prop', () => {
    const result = backgroundOrigin()({ style$BackgroundOrigin: 'inherit' });
    expect(result).toEqual({ backgroundOrigin: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = backgroundOrigin<'a'>()({ style$BackgroundOrigin: 'a' });
    expect(result).toEqual({ backgroundOrigin: 'a' });
  });

  it('should use an interface which marks `backgroundOrigin` as optional', () => {
    const result = backgroundOrigin<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = backgroundOrigin<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$BackgroundOrigin: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      backgroundOrigin: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = backgroundOrigin<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$BackgroundOrigin: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      backgroundOrigin: 'a',
      [theme.breakpoints.large]: {
        backgroundOrigin: 'b',
      },
      [theme.breakpoints.medium]: {
        backgroundOrigin: 'c',
      },
      [theme.breakpoints.small]: {
        backgroundOrigin: 'd',
      },
    });
  });
});
