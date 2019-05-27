import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { borderTopRightRadius } from '../borderTopRightRadius';

describe('borderTopRightRadius', () => {
  it('should return a function', () => {
    const result = borderTopRightRadius();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `borderTopRightRadius` as component and css prop', () => {
    const result = borderTopRightRadius()({ style$BorderTopRightRadius: 'inherit' });
    expect(result).toEqual({ borderTopRightRadius: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderTopRightRadius<'a'>()({ style$BorderTopRightRadius: 'a' });
    expect(result).toEqual({ borderTopRightRadius: 'a' });
  });

  it('should use an interface which marks `borderTopRightRadius` as optional', () => {
    const result = borderTopRightRadius<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = borderTopRightRadius<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$BorderTopRightRadius: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      borderTopRightRadius: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderTopRightRadius<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$BorderTopRightRadius: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      borderTopRightRadius: 'a',
      [theme.breakpoints.large]: {
        borderTopRightRadius: 'b',
      },
      [theme.breakpoints.medium]: {
        borderTopRightRadius: 'c',
      },
      [theme.breakpoints.small]: {
        borderTopRightRadius: 'd',
      },
    });
  });
});
