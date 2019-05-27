import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { paddingTop } from '../paddingTop';

describe('paddingTop', () => {
  it('should return a function', () => {
    const result = paddingTop();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `paddingTop` as component and css prop', () => {
    const result = paddingTop()({ style$PaddingTop: 'inherit' });
    expect(result).toEqual({ paddingTop: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = paddingTop<'a'>()({ style$PaddingTop: 'a' });
    expect(result).toEqual({ paddingTop: 'a' });
  });

  it('should use an interface which marks `paddingTop` as optional', () => {
    const result = paddingTop<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = paddingTop<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$PaddingTop: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      paddingTop: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = paddingTop<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$PaddingTop: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      paddingTop: 'a',
      [theme.breakpoints.large]: {
        paddingTop: 'b',
      },
      [theme.breakpoints.medium]: {
        paddingTop: 'c',
      },
      [theme.breakpoints.small]: {
        paddingTop: 'd',
      },
    });
  });
});
