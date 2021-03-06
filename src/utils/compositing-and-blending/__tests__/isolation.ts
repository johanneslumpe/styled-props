import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { isolation } from '../isolation';

describe('isolation', () => {
  it('should return a function', () => {
    const result = isolation();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `isolation` as component and css prop', () => {
    const result = isolation()({ style$Isolation: 'inherit' });
    expect(result).toEqual({ isolation: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = isolation<'a'>()({ style$Isolation: 'a' });
    expect(result).toEqual({ isolation: 'a' });
  });

  it('should use an interface which marks `isolation` as optional', () => {
    const result = isolation<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = isolation<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$Isolation: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      isolation: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = isolation<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$Isolation: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      isolation: 'a',
      [theme.breakpoints.large]: {
        isolation: 'b',
      },
      [theme.breakpoints.medium]: {
        isolation: 'c',
      },
      [theme.breakpoints.small]: {
        isolation: 'd',
      },
    });
  });
});
