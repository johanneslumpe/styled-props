import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { marginBlock } from '../marginBlock';

describe('marginBlock', () => {
  it('should return a function', () => {
    const result = marginBlock();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `marginBlock` as component and css prop', () => {
    const result = marginBlock()({ style$MarginBlock: 'inherit' });
    expect(result).toEqual({ marginBlock: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = marginBlock<'a'>()({ style$MarginBlock: 'a' });
    expect(result).toEqual({ marginBlock: 'a' });
  });

  it('should use an interface which marks `marginBlock` as optional', () => {
    const result = marginBlock<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = marginBlock<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$MarginBlock: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      marginBlock: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = marginBlock<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$MarginBlock: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      marginBlock: 'a',
      [theme.breakpoints.large]: {
        marginBlock: 'b',
      },
      [theme.breakpoints.medium]: {
        marginBlock: 'c',
      },
      [theme.breakpoints.small]: {
        marginBlock: 'd',
      },
    });
  });
});
