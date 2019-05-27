import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { borderBlockStartWidth } from '../borderBlockStartWidth';

describe('borderBlockStartWidth', () => {
  it('should return a function', () => {
    const result = borderBlockStartWidth();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `borderBlockStartWidth` as component and css prop', () => {
    const result = borderBlockStartWidth()({ style$BorderBlockStartWidth: 'inherit' });
    expect(result).toEqual({ borderBlockStartWidth: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderBlockStartWidth<'a'>()({ style$BorderBlockStartWidth: 'a' });
    expect(result).toEqual({ borderBlockStartWidth: 'a' });
  });

  it('should use an interface which marks `borderBlockStartWidth` as optional', () => {
    const result = borderBlockStartWidth<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = borderBlockStartWidth<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$BorderBlockStartWidth: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      borderBlockStartWidth: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderBlockStartWidth<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$BorderBlockStartWidth: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      borderBlockStartWidth: 'a',
      [theme.breakpoints.large]: {
        borderBlockStartWidth: 'b',
      },
      [theme.breakpoints.medium]: {
        borderBlockStartWidth: 'c',
      },
      [theme.breakpoints.small]: {
        borderBlockStartWidth: 'd',
      },
    });
  });
});
