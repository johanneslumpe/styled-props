import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { scrollPaddingBlockEnd } from '../scrollPaddingBlockEnd';

describe('scrollPaddingBlockEnd', () => {
  it('should return a function', () => {
    const result = scrollPaddingBlockEnd();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `scrollPaddingBlockEnd` as component and css prop', () => {
    const result = scrollPaddingBlockEnd()({ style$ScrollPaddingBlockEnd: 'inherit' });
    expect(result).toEqual({ scrollPaddingBlockEnd: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = scrollPaddingBlockEnd<'a'>()({ style$ScrollPaddingBlockEnd: 'a' });
    expect(result).toEqual({ scrollPaddingBlockEnd: 'a' });
  });

  it('should use an interface which marks `scrollPaddingBlockEnd` as optional', () => {
    const result = scrollPaddingBlockEnd<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = scrollPaddingBlockEnd<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$ScrollPaddingBlockEnd: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      scrollPaddingBlockEnd: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = scrollPaddingBlockEnd<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$ScrollPaddingBlockEnd: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      scrollPaddingBlockEnd: 'a',
      [theme.breakpoints.large]: {
        scrollPaddingBlockEnd: 'b',
      },
      [theme.breakpoints.medium]: {
        scrollPaddingBlockEnd: 'c',
      },
      [theme.breakpoints.small]: {
        scrollPaddingBlockEnd: 'd',
      },
    });
  });
});
