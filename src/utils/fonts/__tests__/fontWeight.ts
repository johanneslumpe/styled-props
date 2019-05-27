import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { fontWeight } from '../fontWeight';

describe('fontWeight', () => {
  it('should return a function', () => {
    const result = fontWeight();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `fontWeight` as component and css prop', () => {
    const result = fontWeight()({ style$FontWeight: 'inherit' });
    expect(result).toEqual({ fontWeight: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = fontWeight<'a'>()({ style$FontWeight: 'a' });
    expect(result).toEqual({ fontWeight: 'a' });
  });

  it('should use an interface which marks `fontWeight` as optional', () => {
    const result = fontWeight<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = fontWeight<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$FontWeight: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      fontWeight: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = fontWeight<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$FontWeight: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      fontWeight: 'a',
      [theme.breakpoints.large]: {
        fontWeight: 'b',
      },
      [theme.breakpoints.medium]: {
        fontWeight: 'c',
      },
      [theme.breakpoints.small]: {
        fontWeight: 'd',
      },
    });
  });
});
