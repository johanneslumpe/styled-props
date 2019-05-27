import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { alignItems } from '../alignItems';

describe('alignItems', () => {
  it('should return a function', () => {
    const result = alignItems();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `alignItems` as component and css prop', () => {
    const result = alignItems()({ style$AlignItems: 'inherit' });
    expect(result).toEqual({ alignItems: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = alignItems<'a'>()({ style$AlignItems: 'a' });
    expect(result).toEqual({ alignItems: 'a' });
  });

  it('should use an interface which marks `alignItems` as optional', () => {
    const result = alignItems<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = alignItems<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$AlignItems: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      alignItems: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = alignItems<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$AlignItems: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      alignItems: 'a',
      [theme.breakpoints.large]: {
        alignItems: 'b',
      },
      [theme.breakpoints.medium]: {
        alignItems: 'c',
      },
      [theme.breakpoints.small]: {
        alignItems: 'd',
      },
    });
  });
});
