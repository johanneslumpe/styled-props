import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { maxWidth } from '../maxWidth';

describe('maxWidth', () => {
  it('should return a function', () => {
    const result = maxWidth();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `maxWidth` as component and css prop', () => {
    const result = maxWidth()({ style$MaxWidth: 'inherit' });
    expect(result).toEqual({ maxWidth: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = maxWidth<'a'>()({ style$MaxWidth: 'a' });
    expect(result).toEqual({ maxWidth: 'a' });
  });

  it('should use an interface which marks `maxWidth` as optional', () => {
    const result = maxWidth<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = maxWidth<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$MaxWidth: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      maxWidth: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = maxWidth<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$MaxWidth: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      maxWidth: 'a',
      [theme.breakpoints.large]: {
        maxWidth: 'b',
      },
      [theme.breakpoints.medium]: {
        maxWidth: 'c',
      },
      [theme.breakpoints.small]: {
        maxWidth: 'd',
      },
    });
  });
});
