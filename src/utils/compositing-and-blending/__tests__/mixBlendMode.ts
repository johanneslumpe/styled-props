import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { mixBlendMode } from '../mixBlendMode';

describe('mixBlendMode', () => {
  it('should return a function', () => {
    const result = mixBlendMode();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `mixBlendMode` as component and css prop', () => {
    const result = mixBlendMode()({ style$MixBlendMode: 'inherit' });
    expect(result).toEqual({ mixBlendMode: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = mixBlendMode<'a'>()({ style$MixBlendMode: 'a' });
    expect(result).toEqual({ mixBlendMode: 'a' });
  });

  it('should use an interface which marks `mixBlendMode` as optional', () => {
    const result = mixBlendMode<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = mixBlendMode<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$MixBlendMode: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      mixBlendMode: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = mixBlendMode<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$MixBlendMode: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      mixBlendMode: 'a',
      [theme.breakpoints.large]: {
        mixBlendMode: 'b',
      },
      [theme.breakpoints.medium]: {
        mixBlendMode: 'c',
      },
      [theme.breakpoints.small]: {
        mixBlendMode: 'd',
      },
    });
  });
});
