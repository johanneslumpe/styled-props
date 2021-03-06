import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { minInlineSize } from '../minInlineSize';

describe('minInlineSize', () => {
  it('should return a function', () => {
    const result = minInlineSize();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `minInlineSize` as component and css prop', () => {
    const result = minInlineSize()({ style$MinInlineSize: 'inherit' });
    expect(result).toEqual({ minInlineSize: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = minInlineSize<'a'>()({ style$MinInlineSize: 'a' });
    expect(result).toEqual({ minInlineSize: 'a' });
  });

  it('should use an interface which marks `minInlineSize` as optional', () => {
    const result = minInlineSize<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = minInlineSize<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$MinInlineSize: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      minInlineSize: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = minInlineSize<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$MinInlineSize: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      minInlineSize: 'a',
      [theme.breakpoints.large]: {
        minInlineSize: 'b',
      },
      [theme.breakpoints.medium]: {
        minInlineSize: 'c',
      },
      [theme.breakpoints.small]: {
        minInlineSize: 'd',
      },
    });
  });
});
