import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { borderTopLeftRadius } from '../borderTopLeftRadius';

describe('borderTopLeftRadius', () => {
  it('should return a function', () => {
    const result = borderTopLeftRadius();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `borderTopLeftRadius` as component and css prop', () => {
    const result = borderTopLeftRadius()({ style$BorderTopLeftRadius: 'inherit' });
    expect(result).toEqual({ borderTopLeftRadius: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderTopLeftRadius<'a'>()({ style$BorderTopLeftRadius: 'a' });
    expect(result).toEqual({ borderTopLeftRadius: 'a' });
  });

  it('should use an interface which marks `borderTopLeftRadius` as optional', () => {
    const result = borderTopLeftRadius<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = borderTopLeftRadius<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$BorderTopLeftRadius: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      borderTopLeftRadius: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderTopLeftRadius<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$BorderTopLeftRadius: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      borderTopLeftRadius: 'a',
      [theme.breakpoints.large]: {
        borderTopLeftRadius: 'b',
      },
      [theme.breakpoints.medium]: {
        borderTopLeftRadius: 'c',
      },
      [theme.breakpoints.small]: {
        borderTopLeftRadius: 'd',
      },
    });
  });
});
