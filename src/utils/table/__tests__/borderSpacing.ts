import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { borderSpacing } from '../borderSpacing';

describe('borderSpacing', () => {
  it('should return a function', () => {
    const result = borderSpacing();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `borderSpacing` as component and css prop', () => {
    const result = borderSpacing()({ style$BorderSpacing: 'inherit' });
    expect(result).toEqual({ borderSpacing: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderSpacing<'a'>()({ style$BorderSpacing: 'a' });
    expect(result).toEqual({ borderSpacing: 'a' });
  });

  it('should use an interface which marks `borderSpacing` as optional', () => {
    const result = borderSpacing<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = borderSpacing<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$BorderSpacing: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      borderSpacing: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderSpacing<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$BorderSpacing: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      borderSpacing: 'a',
      [theme.breakpoints.large]: {
        borderSpacing: 'b',
      },
      [theme.breakpoints.medium]: {
        borderSpacing: 'c',
      },
      [theme.breakpoints.small]: {
        borderSpacing: 'd',
      },
    });
  });
});
