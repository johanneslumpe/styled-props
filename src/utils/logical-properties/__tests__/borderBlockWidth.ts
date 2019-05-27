import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { borderBlockWidth } from '../borderBlockWidth';

describe('borderBlockWidth', () => {
  it('should return a function', () => {
    const result = borderBlockWidth();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `borderBlockWidth` as component and css prop', () => {
    const result = borderBlockWidth()({ style$BorderBlockWidth: 'inherit' });
    expect(result).toEqual({ borderBlockWidth: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderBlockWidth<'a'>()({ style$BorderBlockWidth: 'a' });
    expect(result).toEqual({ borderBlockWidth: 'a' });
  });

  it('should use an interface which marks `borderBlockWidth` as optional', () => {
    const result = borderBlockWidth<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = borderBlockWidth<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$BorderBlockWidth: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      borderBlockWidth: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderBlockWidth<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$BorderBlockWidth: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      borderBlockWidth: 'a',
      [theme.breakpoints.large]: {
        borderBlockWidth: 'b',
      },
      [theme.breakpoints.medium]: {
        borderBlockWidth: 'c',
      },
      [theme.breakpoints.small]: {
        borderBlockWidth: 'd',
      },
    });
  });
});
