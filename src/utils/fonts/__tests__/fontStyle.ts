import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { fontStyle } from '../fontStyle';

describe('fontStyle', () => {
  it('should return a function', () => {
    const result = fontStyle();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `fontStyle` as component and css prop', () => {
    const result = fontStyle()({ style$FontStyle: 'inherit' });
    expect(result).toEqual({ fontStyle: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = fontStyle<'a'>()({ style$FontStyle: 'a' });
    expect(result).toEqual({ fontStyle: 'a' });
  });

  it('should use an interface which marks `fontStyle` as optional', () => {
    const result = fontStyle<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = fontStyle<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$FontStyle: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      fontStyle: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = fontStyle<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$FontStyle: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      fontStyle: 'a',
      [theme.breakpoints.large]: {
        fontStyle: 'b',
      },
      [theme.breakpoints.medium]: {
        fontStyle: 'c',
      },
      [theme.breakpoints.small]: {
        fontStyle: 'd',
      },
    });
  });
});
