import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { borderBlock } from '../borderBlock';

describe('borderBlock', () => {
  it('should return a function', () => {
    const result = borderBlock();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `borderBlock` as component and css prop', () => {
    const result = borderBlock()({ style$BorderBlock: 'inherit' });
    expect(result).toEqual({ borderBlock: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderBlock<'a'>()({ style$BorderBlock: 'a' });
    expect(result).toEqual({ borderBlock: 'a' });
  });

  it('should use an interface which marks `borderBlock` as optional', () => {
    const result = borderBlock<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = borderBlock<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$BorderBlock: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      borderBlock: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderBlock<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$BorderBlock: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      borderBlock: 'a',
      [theme.breakpoints.large]: {
        borderBlock: 'b',
      },
      [theme.breakpoints.medium]: {
        borderBlock: 'c',
      },
      [theme.breakpoints.small]: {
        borderBlock: 'd',
      },
    });
  });
});
