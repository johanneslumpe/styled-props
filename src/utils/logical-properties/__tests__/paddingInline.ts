import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { paddingInline } from '../paddingInline';

describe('paddingInline', () => {
  it('should return a function', () => {
    const result = paddingInline();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `paddingInline` as component and css prop', () => {
    const result = paddingInline()({ style$PaddingInline: 'inherit' });
    expect(result).toEqual({ paddingInline: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = paddingInline<'a'>()({ style$PaddingInline: 'a' });
    expect(result).toEqual({ paddingInline: 'a' });
  });

  it('should use an interface which marks `paddingInline` as optional', () => {
    const result = paddingInline<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = paddingInline<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$PaddingInline: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      paddingInline: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = paddingInline<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$PaddingInline: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      paddingInline: 'a',
      [theme.breakpoints.large]: {
        paddingInline: 'b',
      },
      [theme.breakpoints.medium]: {
        paddingInline: 'c',
      },
      [theme.breakpoints.small]: {
        paddingInline: 'd',
      },
    });
  });
});
