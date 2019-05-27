import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { scrollPaddingBlockStart } from '../scrollPaddingBlockStart';

describe('scrollPaddingBlockStart', () => {
  it('should return a function', () => {
    const result = scrollPaddingBlockStart();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `scrollPaddingBlockStart` as component and css prop', () => {
    const result = scrollPaddingBlockStart()({ style$ScrollPaddingBlockStart: 'inherit' });
    expect(result).toEqual({ scrollPaddingBlockStart: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = scrollPaddingBlockStart<'a'>()({ style$ScrollPaddingBlockStart: 'a' });
    expect(result).toEqual({ scrollPaddingBlockStart: 'a' });
  });

  it('should use an interface which marks `scrollPaddingBlockStart` as optional', () => {
    const result = scrollPaddingBlockStart<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = scrollPaddingBlockStart<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$ScrollPaddingBlockStart: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      scrollPaddingBlockStart: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = scrollPaddingBlockStart<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$ScrollPaddingBlockStart: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      scrollPaddingBlockStart: 'a',
      [theme.breakpoints.large]: {
        scrollPaddingBlockStart: 'b',
      },
      [theme.breakpoints.medium]: {
        scrollPaddingBlockStart: 'c',
      },
      [theme.breakpoints.small]: {
        scrollPaddingBlockStart: 'd',
      },
    });
  });
});
