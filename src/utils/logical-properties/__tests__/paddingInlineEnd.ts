import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { paddingInlineEnd } from '../paddingInlineEnd';

describe('paddingInlineEnd', () => {
  it('should return a function', () => {
    const result = paddingInlineEnd();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `paddingInlineEnd` as component and css prop', () => {
    const result = paddingInlineEnd()({ style$PaddingInlineEnd: 'inherit' });
    expect(result).toEqual({ paddingInlineEnd: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = paddingInlineEnd<'a'>()({ style$PaddingInlineEnd: 'a' });
    expect(result).toEqual({ paddingInlineEnd: 'a' });
  });

  it('should use an interface which marks `paddingInlineEnd` as optional', () => {
    const result = paddingInlineEnd<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = paddingInlineEnd<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$PaddingInlineEnd: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      paddingInlineEnd: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = paddingInlineEnd<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$PaddingInlineEnd: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      paddingInlineEnd: 'a',
      [theme.breakpoints.large]: {
        paddingInlineEnd: 'b',
      },
      [theme.breakpoints.medium]: {
        paddingInlineEnd: 'c',
      },
      [theme.breakpoints.small]: {
        paddingInlineEnd: 'd',
      },
    });
  });
});
