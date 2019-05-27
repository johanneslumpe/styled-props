import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { maxHeight } from '../maxHeight';

describe('maxHeight', () => {
  it('should return a function', () => {
    const result = maxHeight();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `maxHeight` as component and css prop', () => {
    const result = maxHeight()({ style$MaxHeight: 'inherit' });
    expect(result).toEqual({ maxHeight: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = maxHeight<'a'>()({ style$MaxHeight: 'a' });
    expect(result).toEqual({ maxHeight: 'a' });
  });

  it('should use an interface which marks `maxHeight` as optional', () => {
    const result = maxHeight<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = maxHeight<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$MaxHeight: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      maxHeight: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = maxHeight<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$MaxHeight: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      maxHeight: 'a',
      [theme.breakpoints.large]: {
        maxHeight: 'b',
      },
      [theme.breakpoints.medium]: {
        maxHeight: 'c',
      },
      [theme.breakpoints.small]: {
        maxHeight: 'd',
      },
    });
  });
});
