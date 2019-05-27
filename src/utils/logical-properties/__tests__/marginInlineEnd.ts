import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { marginInlineEnd } from '../marginInlineEnd';

describe('marginInlineEnd', () => {
  it('should return a function', () => {
    const result = marginInlineEnd();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `marginInlineEnd` as component and css prop', () => {
    const result = marginInlineEnd()({ style$MarginInlineEnd: 'inherit' });
    expect(result).toEqual({ marginInlineEnd: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = marginInlineEnd<'a'>()({ style$MarginInlineEnd: 'a' });
    expect(result).toEqual({ marginInlineEnd: 'a' });
  });

  it('should use an interface which marks `marginInlineEnd` as optional', () => {
    const result = marginInlineEnd<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = marginInlineEnd<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$MarginInlineEnd: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      marginInlineEnd: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = marginInlineEnd<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$MarginInlineEnd: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      marginInlineEnd: 'a',
      [theme.breakpoints.large]: {
        marginInlineEnd: 'b',
      },
      [theme.breakpoints.medium]: {
        marginInlineEnd: 'c',
      },
      [theme.breakpoints.small]: {
        marginInlineEnd: 'd',
      },
    });
  });
});
