import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { paddingRight } from '../paddingRight';

describe('paddingRight', () => {
  it('should return a function', () => {
    const result = paddingRight();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `paddingRight` as component and css prop', () => {
    const result = paddingRight()({ style$PaddingRight: 'inherit' });
    expect(result).toEqual({ paddingRight: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = paddingRight<'a'>()({ style$PaddingRight: 'a' });
    expect(result).toEqual({ paddingRight: 'a' });
  });

  it('should use an interface which marks `paddingRight` as optional', () => {
    const result = paddingRight<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = paddingRight<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$PaddingRight: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      paddingRight: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = paddingRight<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$PaddingRight: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      paddingRight: 'a',
      [theme.breakpoints.large]: {
        paddingRight: 'b',
      },
      [theme.breakpoints.medium]: {
        paddingRight: 'c',
      },
      [theme.breakpoints.small]: {
        paddingRight: 'd',
      },
    });
  });
});
