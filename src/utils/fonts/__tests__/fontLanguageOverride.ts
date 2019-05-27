import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { fontLanguageOverride } from '../fontLanguageOverride';

describe('fontLanguageOverride', () => {
  it('should return a function', () => {
    const result = fontLanguageOverride();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `fontLanguageOverride` as component and css prop', () => {
    const result = fontLanguageOverride()({ style$FontLanguageOverride: 'inherit' });
    expect(result).toEqual({ fontLanguageOverride: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = fontLanguageOverride<'a'>()({ style$FontLanguageOverride: 'a' });
    expect(result).toEqual({ fontLanguageOverride: 'a' });
  });

  it('should use an interface which marks `fontLanguageOverride` as optional', () => {
    const result = fontLanguageOverride<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = fontLanguageOverride<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$FontLanguageOverride: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      fontLanguageOverride: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = fontLanguageOverride<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$FontLanguageOverride: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      fontLanguageOverride: 'a',
      [theme.breakpoints.large]: {
        fontLanguageOverride: 'b',
      },
      [theme.breakpoints.medium]: {
        fontLanguageOverride: 'c',
      },
      [theme.breakpoints.small]: {
        fontLanguageOverride: 'd',
      },
    });
  });
});
