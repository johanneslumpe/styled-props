import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { colorAdjust } from '../colorAdjust';

describe('colorAdjust', () => {
  it('should return a function', () => {
    const result = colorAdjust();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `colorAdjust` as component and css prop', () => {
    const result = colorAdjust()({ style$ColorAdjust: 'inherit' });
    expect(result).toEqual({ colorAdjust: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = colorAdjust<'a'>()({ style$ColorAdjust: 'a' });
    expect(result).toEqual({ colorAdjust: 'a' });
  });

  it('should use an interface which marks `colorAdjust` as optional', () => {
    const result = colorAdjust<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = colorAdjust<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$ColorAdjust: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      colorAdjust: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = colorAdjust<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$ColorAdjust: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      colorAdjust: 'a',
      [theme.breakpoints.large]: {
        colorAdjust: 'b',
      },
      [theme.breakpoints.medium]: {
        colorAdjust: 'c',
      },
      [theme.breakpoints.small]: {
        colorAdjust: 'd',
      },
    });
  });
});
