import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { borderStartStartRadius } from '../borderStartStartRadius';

describe('borderStartStartRadius', () => {
  it('should return a function', () => {
    const result = borderStartStartRadius();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `borderStartStartRadius` as component and css prop', () => {
    const result = borderStartStartRadius()({ style$BorderStartStartRadius: 'inherit' });
    expect(result).toEqual({ borderStartStartRadius: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderStartStartRadius<'a'>()({ style$BorderStartStartRadius: 'a' });
    expect(result).toEqual({ borderStartStartRadius: 'a' });
  });

  it('should use an interface which marks `borderStartStartRadius` as optional', () => {
    const result = borderStartStartRadius<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = borderStartStartRadius<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$BorderStartStartRadius: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      borderStartStartRadius: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderStartStartRadius<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$BorderStartStartRadius: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      borderStartStartRadius: 'a',
      [theme.breakpoints.large]: {
        borderStartStartRadius: 'b',
      },
      [theme.breakpoints.medium]: {
        borderStartStartRadius: 'c',
      },
      [theme.breakpoints.small]: {
        borderStartStartRadius: 'd',
      },
    });
  });
});
