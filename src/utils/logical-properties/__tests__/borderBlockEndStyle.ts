import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { borderBlockEndStyle } from '../borderBlockEndStyle';

describe('borderBlockEndStyle', () => {
  it('should return a function', () => {
    const result = borderBlockEndStyle();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `borderBlockEndStyle` as component and css prop', () => {
    const result = borderBlockEndStyle()({ style$BorderBlockEndStyle: 'inherit' });
    expect(result).toEqual({ borderBlockEndStyle: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderBlockEndStyle<'a'>()({ style$BorderBlockEndStyle: 'a' });
    expect(result).toEqual({ borderBlockEndStyle: 'a' });
  });

  it('should use an interface which marks `borderBlockEndStyle` as optional', () => {
    const result = borderBlockEndStyle<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = borderBlockEndStyle<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$BorderBlockEndStyle: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      borderBlockEndStyle: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderBlockEndStyle<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$BorderBlockEndStyle: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      borderBlockEndStyle: 'a',
      [theme.breakpoints.large]: {
        borderBlockEndStyle: 'b',
      },
      [theme.breakpoints.medium]: {
        borderBlockEndStyle: 'c',
      },
      [theme.breakpoints.small]: {
        borderBlockEndStyle: 'd',
      },
    });
  });
});
