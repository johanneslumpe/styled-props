import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { borderWidth } from '../borderWidth';

describe('borderWidth', () => {
  it('should return a function', () => {
    const result = borderWidth();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `borderWidth` as component and css prop', () => {
    const result = borderWidth()({ style$BorderWidth: 'inherit' });
    expect(result).toEqual({ borderWidth: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderWidth<'a'>()({ style$BorderWidth: 'a' });
    expect(result).toEqual({ borderWidth: 'a' });
  });

  it('should use an interface which marks `borderWidth` as optional', () => {
    const result = borderWidth<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = borderWidth<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$BorderWidth: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      borderWidth: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderWidth<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$BorderWidth: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      borderWidth: 'a',
      [theme.breakpoints.large]: {
        borderWidth: 'b',
      },
      [theme.breakpoints.medium]: {
        borderWidth: 'c',
      },
      [theme.breakpoints.small]: {
        borderWidth: 'd',
      },
    });
  });
});
