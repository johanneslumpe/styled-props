import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { insetBlock } from '../insetBlock';

describe('insetBlock', () => {
  it('should return a function', () => {
    const result = insetBlock();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `insetBlock` as component and css prop', () => {
    const result = insetBlock()({ style$InsetBlock: 'inherit' });
    expect(result).toEqual({ insetBlock: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = insetBlock<'a'>()({ style$InsetBlock: 'a' });
    expect(result).toEqual({ insetBlock: 'a' });
  });

  it('should use an interface which marks `insetBlock` as optional', () => {
    const result = insetBlock<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = insetBlock<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$InsetBlock: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      insetBlock: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = insetBlock<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$InsetBlock: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      insetBlock: 'a',
      [theme.breakpoints.large]: {
        insetBlock: 'b',
      },
      [theme.breakpoints.medium]: {
        insetBlock: 'c',
      },
      [theme.breakpoints.small]: {
        insetBlock: 'd',
      },
    });
  });
});
