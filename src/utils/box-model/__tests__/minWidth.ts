import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { minWidth } from '../minWidth';

describe('minWidth', () => {
  it('should return a function', () => {
    const result = minWidth();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `minWidth` as component and css prop', () => {
    const result = minWidth()({ style$MinWidth: 'inherit' });
    expect(result).toEqual({ minWidth: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = minWidth<'a'>()({ style$MinWidth: 'a' });
    expect(result).toEqual({ minWidth: 'a' });
  });

  it('should use an interface which marks `minWidth` as optional', () => {
    const result = minWidth<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = minWidth<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$MinWidth: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      minWidth: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = minWidth<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$MinWidth: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      minWidth: 'a',
      [theme.breakpoints.large]: {
        minWidth: 'b',
      },
      [theme.breakpoints.medium]: {
        minWidth: 'c',
      },
      [theme.breakpoints.small]: {
        minWidth: 'd',
      },
    });
  });
});
