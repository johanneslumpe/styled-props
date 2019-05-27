import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { fontVariantLigatures } from '../fontVariantLigatures';

describe('fontVariantLigatures', () => {
  it('should return a function', () => {
    const result = fontVariantLigatures();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `fontVariantLigatures` as component and css prop', () => {
    const result = fontVariantLigatures()({ style$FontVariantLigatures: 'inherit' });
    expect(result).toEqual({ fontVariantLigatures: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = fontVariantLigatures<'a'>()({ style$FontVariantLigatures: 'a' });
    expect(result).toEqual({ fontVariantLigatures: 'a' });
  });

  it('should use an interface which marks `fontVariantLigatures` as optional', () => {
    const result = fontVariantLigatures<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = fontVariantLigatures<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$FontVariantLigatures: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      fontVariantLigatures: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = fontVariantLigatures<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$FontVariantLigatures: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      fontVariantLigatures: 'a',
      [theme.breakpoints.large]: {
        fontVariantLigatures: 'b',
      },
      [theme.breakpoints.medium]: {
        fontVariantLigatures: 'c',
      },
      [theme.breakpoints.small]: {
        fontVariantLigatures: 'd',
      },
    });
  });
});
