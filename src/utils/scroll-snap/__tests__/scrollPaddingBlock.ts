import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { scrollPaddingBlock } from '../scrollPaddingBlock';

describe('scrollPaddingBlock', () => {
  it('should return a function', () => {
    const result = scrollPaddingBlock();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `scrollPaddingBlock` as component and css prop', () => {
    const result = scrollPaddingBlock()({ style$ScrollPaddingBlock: 'inherit' });
    expect(result).toEqual({ scrollPaddingBlock: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = scrollPaddingBlock<'a'>()({ style$ScrollPaddingBlock: 'a' });
    expect(result).toEqual({ scrollPaddingBlock: 'a' });
  });

  it('should use an interface which marks `scrollPaddingBlock` as optional', () => {
    const result = scrollPaddingBlock<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = scrollPaddingBlock<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$ScrollPaddingBlock: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      scrollPaddingBlock: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = scrollPaddingBlock<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$ScrollPaddingBlock: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      scrollPaddingBlock: 'a',
      [theme.breakpoints.large]: {
        scrollPaddingBlock: 'b',
      },
      [theme.breakpoints.medium]: {
        scrollPaddingBlock: 'c',
      },
      [theme.breakpoints.small]: {
        scrollPaddingBlock: 'd',
      },
    });
  });
});
