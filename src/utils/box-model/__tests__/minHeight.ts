import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { minHeight } from '../minHeight';

describe('minHeight', () => {
  it('should return a function', () => {
    const result = minHeight();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `minHeight` as component and css prop', () => {
    const result = minHeight()({ style$MinHeight: 'inherit' });
    expect(result).toEqual({ minHeight: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = minHeight<'a'>()({ style$MinHeight: 'a' });
    expect(result).toEqual({ minHeight: 'a' });
  });

  it('should use an interface which marks `minHeight` as optional', () => {
    const result = minHeight<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = minHeight<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$MinHeight: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      minHeight: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = minHeight<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$MinHeight: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      minHeight: 'a',
      [theme.breakpoints.large]: {
        minHeight: 'b',
      },
      [theme.breakpoints.medium]: {
        minHeight: 'c',
      },
      [theme.breakpoints.small]: {
        minHeight: 'd',
      },
    });
  });
});
