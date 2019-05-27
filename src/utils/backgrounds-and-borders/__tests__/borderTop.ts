import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { borderTop } from '../borderTop';

describe('borderTop', () => {
  it('should return a function', () => {
    const result = borderTop();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `borderTop` as component and css prop', () => {
    const result = borderTop()({ style$BorderTop: 'inherit' });
    expect(result).toEqual({ borderTop: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderTop<'a'>()({ style$BorderTop: 'a' });
    expect(result).toEqual({ borderTop: 'a' });
  });

  it('should use an interface which marks `borderTop` as optional', () => {
    const result = borderTop<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = borderTop<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$BorderTop: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      borderTop: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderTop<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$BorderTop: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      borderTop: 'a',
      [theme.breakpoints.large]: {
        borderTop: 'b',
      },
      [theme.breakpoints.medium]: {
        borderTop: 'c',
      },
      [theme.breakpoints.small]: {
        borderTop: 'd',
      },
    });
  });
});
