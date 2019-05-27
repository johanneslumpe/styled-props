import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { paddingLeft } from '../paddingLeft';

describe('paddingLeft', () => {
  it('should return a function', () => {
    const result = paddingLeft();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `paddingLeft` as component and css prop', () => {
    const result = paddingLeft()({ style$PaddingLeft: 'inherit' });
    expect(result).toEqual({ paddingLeft: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = paddingLeft<'a'>()({ style$PaddingLeft: 'a' });
    expect(result).toEqual({ paddingLeft: 'a' });
  });

  it('should use an interface which marks `paddingLeft` as optional', () => {
    const result = paddingLeft<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = paddingLeft<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$PaddingLeft: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      paddingLeft: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = paddingLeft<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$PaddingLeft: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      paddingLeft: 'a',
      [theme.breakpoints.large]: {
        paddingLeft: 'b',
      },
      [theme.breakpoints.medium]: {
        paddingLeft: 'c',
      },
      [theme.breakpoints.small]: {
        paddingLeft: 'd',
      },
    });
  });
});
