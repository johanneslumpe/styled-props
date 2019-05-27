import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { borderBlockStartStyle } from '../borderBlockStartStyle';

describe('borderBlockStartStyle', () => {
  it('should return a function', () => {
    const result = borderBlockStartStyle();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `borderBlockStartStyle` as component and css prop', () => {
    const result = borderBlockStartStyle()({ style$BorderBlockStartStyle: 'inherit' });
    expect(result).toEqual({ borderBlockStartStyle: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderBlockStartStyle<'a'>()({ style$BorderBlockStartStyle: 'a' });
    expect(result).toEqual({ borderBlockStartStyle: 'a' });
  });

  it('should use an interface which marks `borderBlockStartStyle` as optional', () => {
    const result = borderBlockStartStyle<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = borderBlockStartStyle<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$BorderBlockStartStyle: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      borderBlockStartStyle: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderBlockStartStyle<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$BorderBlockStartStyle: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      borderBlockStartStyle: 'a',
      [theme.breakpoints.large]: {
        borderBlockStartStyle: 'b',
      },
      [theme.breakpoints.medium]: {
        borderBlockStartStyle: 'c',
      },
      [theme.breakpoints.small]: {
        borderBlockStartStyle: 'd',
      },
    });
  });
});
