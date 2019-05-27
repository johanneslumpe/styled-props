import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { scrollPaddingBottom } from '../scrollPaddingBottom';

describe('scrollPaddingBottom', () => {
  it('should return a function', () => {
    const result = scrollPaddingBottom();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `scrollPaddingBottom` as component and css prop', () => {
    const result = scrollPaddingBottom()({ style$ScrollPaddingBottom: 'inherit' });
    expect(result).toEqual({ scrollPaddingBottom: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = scrollPaddingBottom<'a'>()({ style$ScrollPaddingBottom: 'a' });
    expect(result).toEqual({ scrollPaddingBottom: 'a' });
  });

  it('should use an interface which marks `scrollPaddingBottom` as optional', () => {
    const result = scrollPaddingBottom<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = scrollPaddingBottom<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$ScrollPaddingBottom: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      scrollPaddingBottom: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = scrollPaddingBottom<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$ScrollPaddingBottom: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      scrollPaddingBottom: 'a',
      [theme.breakpoints.large]: {
        scrollPaddingBottom: 'b',
      },
      [theme.breakpoints.medium]: {
        scrollPaddingBottom: 'c',
      },
      [theme.breakpoints.small]: {
        scrollPaddingBottom: 'd',
      },
    });
  });
});
