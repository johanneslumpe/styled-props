import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { paddingBlock } from '../paddingBlock';

describe('paddingBlock', () => {
  it('should return a function', () => {
    const result = paddingBlock();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `paddingBlock` as component and css prop', () => {
    const result = paddingBlock()({ style$PaddingBlock: 'inherit' });
    expect(result).toEqual({ paddingBlock: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = paddingBlock<'a'>()({ style$PaddingBlock: 'a' });
    expect(result).toEqual({ paddingBlock: 'a' });
  });

  it('should use an interface which marks `paddingBlock` as optional', () => {
    const result = paddingBlock<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = paddingBlock<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$PaddingBlock: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      paddingBlock: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = paddingBlock<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$PaddingBlock: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      paddingBlock: 'a',
      [theme.breakpoints.large]: {
        paddingBlock: 'b',
      },
      [theme.breakpoints.medium]: {
        paddingBlock: 'c',
      },
      [theme.breakpoints.small]: {
        paddingBlock: 'd',
      },
    });
  });
});
