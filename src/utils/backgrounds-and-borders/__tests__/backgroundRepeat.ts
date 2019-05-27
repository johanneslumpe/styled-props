import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { backgroundRepeat } from '../backgroundRepeat';

describe('backgroundRepeat', () => {
  it('should return a function', () => {
    const result = backgroundRepeat();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `backgroundRepeat` as component and css prop', () => {
    const result = backgroundRepeat()({ style$BackgroundRepeat: 'inherit' });
    expect(result).toEqual({ backgroundRepeat: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = backgroundRepeat<'a'>()({ style$BackgroundRepeat: 'a' });
    expect(result).toEqual({ backgroundRepeat: 'a' });
  });

  it('should use an interface which marks `backgroundRepeat` as optional', () => {
    const result = backgroundRepeat<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = backgroundRepeat<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$BackgroundRepeat: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      backgroundRepeat: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = backgroundRepeat<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$BackgroundRepeat: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      backgroundRepeat: 'a',
      [theme.breakpoints.large]: {
        backgroundRepeat: 'b',
      },
      [theme.breakpoints.medium]: {
        backgroundRepeat: 'c',
      },
      [theme.breakpoints.small]: {
        backgroundRepeat: 'd',
      },
    });
  });
});
