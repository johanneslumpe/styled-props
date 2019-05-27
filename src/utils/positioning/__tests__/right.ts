import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { right } from '../right';

describe('right', () => {
  it('should return a function', () => {
    const result = right();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `right` as component and css prop', () => {
    const result = right()({ style$Right: 'inherit' });
    expect(result).toEqual({ right: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = right<'a'>()({ style$Right: 'a' });
    expect(result).toEqual({ right: 'a' });
  });

  it('should use an interface which marks `right` as optional', () => {
    const result = right<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = right<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$Right: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      right: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = right<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$Right: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      right: 'a',
      [theme.breakpoints.large]: {
        right: 'b',
      },
      [theme.breakpoints.medium]: {
        right: 'c',
      },
      [theme.breakpoints.small]: {
        right: 'd',
      },
    });
  });
});
