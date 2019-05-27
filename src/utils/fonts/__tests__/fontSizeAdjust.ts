import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { fontSizeAdjust } from '../fontSizeAdjust';

describe('fontSizeAdjust', () => {
  it('should return a function', () => {
    const result = fontSizeAdjust();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `fontSizeAdjust` as component and css prop', () => {
    const result = fontSizeAdjust()({ style$FontSizeAdjust: 'inherit' });
    expect(result).toEqual({ fontSizeAdjust: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = fontSizeAdjust<'a'>()({ style$FontSizeAdjust: 'a' });
    expect(result).toEqual({ fontSizeAdjust: 'a' });
  });

  it('should use an interface which marks `fontSizeAdjust` as optional', () => {
    const result = fontSizeAdjust<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = fontSizeAdjust<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$FontSizeAdjust: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      fontSizeAdjust: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = fontSizeAdjust<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$FontSizeAdjust: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      fontSizeAdjust: 'a',
      [theme.breakpoints.large]: {
        fontSizeAdjust: 'b',
      },
      [theme.breakpoints.medium]: {
        fontSizeAdjust: 'c',
      },
      [theme.breakpoints.small]: {
        fontSizeAdjust: 'd',
      },
    });
  });
});
