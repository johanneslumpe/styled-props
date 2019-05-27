import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { float } from '../float';

describe('float', () => {
  it('should return a function', () => {
    const result = float();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `float` as component and css prop', () => {
    const result = float()({ style$Float: 'inherit' });
    expect(result).toEqual({ float: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = float<'a'>()({ style$Float: 'a' });
    expect(result).toEqual({ float: 'a' });
  });

  it('should use an interface which marks `float` as optional', () => {
    const result = float<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = float<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$Float: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      float: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = float<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$Float: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      float: 'a',
      [theme.breakpoints.large]: {
        float: 'b',
      },
      [theme.breakpoints.medium]: {
        float: 'c',
      },
      [theme.breakpoints.small]: {
        float: 'd',
      },
    });
  });
});
