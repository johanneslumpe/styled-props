import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { wordSpacing } from '../wordSpacing';

describe('wordSpacing', () => {
  it('should return a function', () => {
    const result = wordSpacing();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `wordSpacing` as component and css prop', () => {
    const result = wordSpacing()({ style$WordSpacing: 'inherit' });
    expect(result).toEqual({ wordSpacing: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = wordSpacing<'a'>()({ style$WordSpacing: 'a' });
    expect(result).toEqual({ wordSpacing: 'a' });
  });

  it('should use an interface which marks `wordSpacing` as optional', () => {
    const result = wordSpacing<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = wordSpacing<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$WordSpacing: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      wordSpacing: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = wordSpacing<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$WordSpacing: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      wordSpacing: 'a',
      [theme.breakpoints.large]: {
        wordSpacing: 'b',
      },
      [theme.breakpoints.medium]: {
        wordSpacing: 'c',
      },
      [theme.breakpoints.small]: {
        wordSpacing: 'd',
      },
    });
  });
});
