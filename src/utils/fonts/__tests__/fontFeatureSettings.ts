import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { fontFeatureSettings } from '../fontFeatureSettings';

describe('fontFeatureSettings', () => {
  it('should return a function', () => {
    const result = fontFeatureSettings();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `fontFeatureSettings` as component and css prop', () => {
    const result = fontFeatureSettings()({ style$FontFeatureSettings: 'inherit' });
    expect(result).toEqual({ fontFeatureSettings: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = fontFeatureSettings<'a'>()({ style$FontFeatureSettings: 'a' });
    expect(result).toEqual({ fontFeatureSettings: 'a' });
  });

  it('should use an interface which marks `fontFeatureSettings` as optional', () => {
    const result = fontFeatureSettings<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = fontFeatureSettings<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$FontFeatureSettings: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      fontFeatureSettings: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = fontFeatureSettings<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$FontFeatureSettings: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      fontFeatureSettings: 'a',
      [theme.breakpoints.large]: {
        fontFeatureSettings: 'b',
      },
      [theme.breakpoints.medium]: {
        fontFeatureSettings: 'c',
      },
      [theme.breakpoints.small]: {
        fontFeatureSettings: 'd',
      },
    });
  });
});
