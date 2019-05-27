import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { borderStartEndRadius } from '../borderStartEndRadius';

describe('borderStartEndRadius', () => {
  it('should return a function', () => {
    const result = borderStartEndRadius();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `borderStartEndRadius` as component and css prop', () => {
    const result = borderStartEndRadius()({ style$BorderStartEndRadius: 'inherit' });
    expect(result).toEqual({ borderStartEndRadius: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderStartEndRadius<'a'>()({ style$BorderStartEndRadius: 'a' });
    expect(result).toEqual({ borderStartEndRadius: 'a' });
  });

  it('should use an interface which marks `borderStartEndRadius` as optional', () => {
    const result = borderStartEndRadius<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = borderStartEndRadius<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$BorderStartEndRadius: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      borderStartEndRadius: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderStartEndRadius<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$BorderStartEndRadius: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      borderStartEndRadius: 'a',
      [theme.breakpoints.large]: {
        borderStartEndRadius: 'b',
      },
      [theme.breakpoints.medium]: {
        borderStartEndRadius: 'c',
      },
      [theme.breakpoints.small]: {
        borderStartEndRadius: 'd',
      },
    });
  });
});
