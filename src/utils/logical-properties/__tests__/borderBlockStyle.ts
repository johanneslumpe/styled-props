import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { borderBlockStyle } from '../borderBlockStyle';

describe('borderBlockStyle', () => {
  it('should return a function', () => {
    const result = borderBlockStyle();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `borderBlockStyle` as component and css prop', () => {
    const result = borderBlockStyle()({ style$BorderBlockStyle: 'inherit' });
    expect(result).toEqual({ borderBlockStyle: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderBlockStyle<'a'>()({ style$BorderBlockStyle: 'a' });
    expect(result).toEqual({ borderBlockStyle: 'a' });
  });

  it('should use an interface which marks `borderBlockStyle` as optional', () => {
    const result = borderBlockStyle<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = borderBlockStyle<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$BorderBlockStyle: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      borderBlockStyle: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderBlockStyle<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$BorderBlockStyle: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      borderBlockStyle: 'a',
      [theme.breakpoints.large]: {
        borderBlockStyle: 'b',
      },
      [theme.breakpoints.medium]: {
        borderBlockStyle: 'c',
      },
      [theme.breakpoints.small]: {
        borderBlockStyle: 'd',
      },
    });
  });
});
