import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { borderLeft } from '../borderLeft';

describe('borderLeft', () => {
  it('should return a function', () => {
    const result = borderLeft();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `borderLeft` as component and css prop', () => {
    const result = borderLeft()({ style$BorderLeft: 'inherit' });
    expect(result).toEqual({ borderLeft: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderLeft<'a'>()({ style$BorderLeft: 'a' });
    expect(result).toEqual({ borderLeft: 'a' });
  });

  it('should use an interface which marks `borderLeft` as optional', () => {
    const result = borderLeft<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = borderLeft<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$BorderLeft: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      borderLeft: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderLeft<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$BorderLeft: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      borderLeft: 'a',
      [theme.breakpoints.large]: {
        borderLeft: 'b',
      },
      [theme.breakpoints.medium]: {
        borderLeft: 'c',
      },
      [theme.breakpoints.small]: {
        borderLeft: 'd',
      },
    });
  });
});
