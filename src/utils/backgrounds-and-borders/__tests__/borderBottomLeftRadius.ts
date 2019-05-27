import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { borderBottomLeftRadius } from '../borderBottomLeftRadius';

describe('borderBottomLeftRadius', () => {
  it('should return a function', () => {
    const result = borderBottomLeftRadius();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `borderBottomLeftRadius` as component and css prop', () => {
    const result = borderBottomLeftRadius()({ style$BorderBottomLeftRadius: 'inherit' });
    expect(result).toEqual({ borderBottomLeftRadius: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderBottomLeftRadius<'a'>()({ style$BorderBottomLeftRadius: 'a' });
    expect(result).toEqual({ borderBottomLeftRadius: 'a' });
  });

  it('should use an interface which marks `borderBottomLeftRadius` as optional', () => {
    const result = borderBottomLeftRadius<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = borderBottomLeftRadius<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$BorderBottomLeftRadius: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      borderBottomLeftRadius: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderBottomLeftRadius<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$BorderBottomLeftRadius: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      borderBottomLeftRadius: 'a',
      [theme.breakpoints.large]: {
        borderBottomLeftRadius: 'b',
      },
      [theme.breakpoints.medium]: {
        borderBottomLeftRadius: 'c',
      },
      [theme.breakpoints.small]: {
        borderBottomLeftRadius: 'd',
      },
    });
  });
});
