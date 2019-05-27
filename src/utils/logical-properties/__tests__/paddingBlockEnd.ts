import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { paddingBlockEnd } from '../paddingBlockEnd';

describe('paddingBlockEnd', () => {
  it('should return a function', () => {
    const result = paddingBlockEnd();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `paddingBlockEnd` as component and css prop', () => {
    const result = paddingBlockEnd()({ style$PaddingBlockEnd: 'inherit' });
    expect(result).toEqual({ paddingBlockEnd: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = paddingBlockEnd<'a'>()({ style$PaddingBlockEnd: 'a' });
    expect(result).toEqual({ paddingBlockEnd: 'a' });
  });

  it('should use an interface which marks `paddingBlockEnd` as optional', () => {
    const result = paddingBlockEnd<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = paddingBlockEnd<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$PaddingBlockEnd: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      paddingBlockEnd: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = paddingBlockEnd<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$PaddingBlockEnd: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      paddingBlockEnd: 'a',
      [theme.breakpoints.large]: {
        paddingBlockEnd: 'b',
      },
      [theme.breakpoints.medium]: {
        paddingBlockEnd: 'c',
      },
      [theme.breakpoints.small]: {
        paddingBlockEnd: 'd',
      },
    });
  });
});
