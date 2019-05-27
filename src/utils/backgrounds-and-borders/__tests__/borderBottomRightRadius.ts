import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { borderBottomRightRadius } from '../borderBottomRightRadius';

describe('borderBottomRightRadius', () => {
  it('should return a function', () => {
    const result = borderBottomRightRadius();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `borderBottomRightRadius` as component and css prop', () => {
    const result = borderBottomRightRadius()({ style$BorderBottomRightRadius: 'inherit' });
    expect(result).toEqual({ borderBottomRightRadius: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderBottomRightRadius<'a'>()({ style$BorderBottomRightRadius: 'a' });
    expect(result).toEqual({ borderBottomRightRadius: 'a' });
  });

  it('should use an interface which marks `borderBottomRightRadius` as optional', () => {
    const result = borderBottomRightRadius<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = borderBottomRightRadius<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$BorderBottomRightRadius: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      borderBottomRightRadius: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderBottomRightRadius<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$BorderBottomRightRadius: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      borderBottomRightRadius: 'a',
      [theme.breakpoints.large]: {
        borderBottomRightRadius: 'b',
      },
      [theme.breakpoints.medium]: {
        borderBottomRightRadius: 'c',
      },
      [theme.breakpoints.small]: {
        borderBottomRightRadius: 'd',
      },
    });
  });
});
