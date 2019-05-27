import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { fontFamily } from '../fontFamily';

describe('fontFamily', () => {
  it('should return a function', () => {
    const result = fontFamily();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `fontFamily` as component and css prop', () => {
    const result = fontFamily()({ style$FontFamily: 'inherit' });
    expect(result).toEqual({ fontFamily: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = fontFamily<'a'>()({ style$FontFamily: 'a' });
    expect(result).toEqual({ fontFamily: 'a' });
  });

  it('should use an interface which marks `fontFamily` as optional', () => {
    const result = fontFamily<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = fontFamily<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$FontFamily: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      fontFamily: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = fontFamily<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$FontFamily: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      fontFamily: 'a',
      [theme.breakpoints.large]: {
        fontFamily: 'b',
      },
      [theme.breakpoints.medium]: {
        fontFamily: 'c',
      },
      [theme.breakpoints.small]: {
        fontFamily: 'd',
      },
    });
  });
});
