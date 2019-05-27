import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { paddingInlineStart } from '../paddingInlineStart';

describe('paddingInlineStart', () => {
  it('should return a function', () => {
    const result = paddingInlineStart();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `paddingInlineStart` as component and css prop', () => {
    const result = paddingInlineStart()({ style$PaddingInlineStart: 'inherit' });
    expect(result).toEqual({ paddingInlineStart: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = paddingInlineStart<'a'>()({ style$PaddingInlineStart: 'a' });
    expect(result).toEqual({ paddingInlineStart: 'a' });
  });

  it('should use an interface which marks `paddingInlineStart` as optional', () => {
    const result = paddingInlineStart<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = paddingInlineStart<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$PaddingInlineStart: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      paddingInlineStart: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = paddingInlineStart<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$PaddingInlineStart: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      paddingInlineStart: 'a',
      [theme.breakpoints.large]: {
        paddingInlineStart: 'b',
      },
      [theme.breakpoints.medium]: {
        paddingInlineStart: 'c',
      },
      [theme.breakpoints.small]: {
        paddingInlineStart: 'd',
      },
    });
  });
});
