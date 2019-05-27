import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { fontVariantCaps } from '../fontVariantCaps';

describe('fontVariantCaps', () => {
  it('should return a function', () => {
    const result = fontVariantCaps();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `fontVariantCaps` as component and css prop', () => {
    const result = fontVariantCaps()({ style$FontVariantCaps: 'inherit' });
    expect(result).toEqual({ fontVariantCaps: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = fontVariantCaps<'a'>()({ style$FontVariantCaps: 'a' });
    expect(result).toEqual({ fontVariantCaps: 'a' });
  });

  it('should use an interface which marks `fontVariantCaps` as optional', () => {
    const result = fontVariantCaps<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = fontVariantCaps<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$FontVariantCaps: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      fontVariantCaps: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = fontVariantCaps<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$FontVariantCaps: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      fontVariantCaps: 'a',
      [theme.breakpoints.large]: {
        fontVariantCaps: 'b',
      },
      [theme.breakpoints.medium]: {
        fontVariantCaps: 'c',
      },
      [theme.breakpoints.small]: {
        fontVariantCaps: 'd',
      },
    });
  });
});
