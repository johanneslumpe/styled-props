import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { borderBottomWidth } from '../borderBottomWidth';

describe('borderBottomWidth', () => {
  it('should return a function', () => {
    const result = borderBottomWidth();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `borderBottomWidth` as component and css prop', () => {
    const result = borderBottomWidth()({ style$BorderBottomWidth: 'inherit' });
    expect(result).toEqual({ borderBottomWidth: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderBottomWidth<'a'>()({ style$BorderBottomWidth: 'a' });
    expect(result).toEqual({ borderBottomWidth: 'a' });
  });

  it('should use an interface which marks `borderBottomWidth` as optional', () => {
    const result = borderBottomWidth<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = borderBottomWidth<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$BorderBottomWidth: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      borderBottomWidth: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderBottomWidth<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$BorderBottomWidth: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      borderBottomWidth: 'a',
      [theme.breakpoints.large]: {
        borderBottomWidth: 'b',
      },
      [theme.breakpoints.medium]: {
        borderBottomWidth: 'c',
      },
      [theme.breakpoints.small]: {
        borderBottomWidth: 'd',
      },
    });
  });
});
