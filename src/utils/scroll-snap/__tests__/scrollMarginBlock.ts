import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { scrollMarginBlock } from '../scrollMarginBlock';

describe('scrollMarginBlock', () => {
  it('should return a function', () => {
    const result = scrollMarginBlock();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `scrollMarginBlock` as component and css prop', () => {
    const result = scrollMarginBlock()({ style$ScrollMarginBlock: 'inherit' });
    expect(result).toEqual({ scrollMarginBlock: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = scrollMarginBlock<'a'>()({ style$ScrollMarginBlock: 'a' });
    expect(result).toEqual({ scrollMarginBlock: 'a' });
  });

  it('should use an interface which marks `scrollMarginBlock` as optional', () => {
    const result = scrollMarginBlock<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = scrollMarginBlock<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$ScrollMarginBlock: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      scrollMarginBlock: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = scrollMarginBlock<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$ScrollMarginBlock: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      scrollMarginBlock: 'a',
      [theme.breakpoints.large]: {
        scrollMarginBlock: 'b',
      },
      [theme.breakpoints.medium]: {
        scrollMarginBlock: 'c',
      },
      [theme.breakpoints.small]: {
        scrollMarginBlock: 'd',
      },
    });
  });
});
