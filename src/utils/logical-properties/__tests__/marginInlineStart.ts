import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { marginInlineStart } from '../marginInlineStart';

describe('marginInlineStart', () => {
  it('should return a function', () => {
    const result = marginInlineStart();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `marginInlineStart` as component and css prop', () => {
    const result = marginInlineStart()({ style$MarginInlineStart: 'inherit' });
    expect(result).toEqual({ marginInlineStart: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = marginInlineStart<'a'>()({ style$MarginInlineStart: 'a' });
    expect(result).toEqual({ marginInlineStart: 'a' });
  });

  it('should use an interface which marks `marginInlineStart` as optional', () => {
    const result = marginInlineStart<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = marginInlineStart<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$MarginInlineStart: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      marginInlineStart: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = marginInlineStart<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$MarginInlineStart: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      marginInlineStart: 'a',
      [theme.breakpoints.large]: {
        marginInlineStart: 'b',
      },
      [theme.breakpoints.medium]: {
        marginInlineStart: 'c',
      },
      [theme.breakpoints.small]: {
        marginInlineStart: 'd',
      },
    });
  });
});
