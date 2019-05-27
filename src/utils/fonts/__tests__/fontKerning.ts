import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { fontKerning } from '../fontKerning';

describe('fontKerning', () => {
  it('should return a function', () => {
    const result = fontKerning();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `fontKerning` as component and css prop', () => {
    const result = fontKerning()({ style$FontKerning: 'inherit' });
    expect(result).toEqual({ fontKerning: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = fontKerning<'a'>()({ style$FontKerning: 'a' });
    expect(result).toEqual({ fontKerning: 'a' });
  });

  it('should use an interface which marks `fontKerning` as optional', () => {
    const result = fontKerning<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = fontKerning<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$FontKerning: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      fontKerning: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = fontKerning<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$FontKerning: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      fontKerning: 'a',
      [theme.breakpoints.large]: {
        fontKerning: 'b',
      },
      [theme.breakpoints.medium]: {
        fontKerning: 'c',
      },
      [theme.breakpoints.small]: {
        fontKerning: 'd',
      },
    });
  });
});
