import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { gap } from '../gap';

describe('gap', () => {
  it('should return a function', () => {
    const result = gap();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `gap` as component and css prop', () => {
    const result = gap()({ style$Gap: 'inherit' });
    expect(result).toEqual({ gap: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = gap<'a'>()({ style$Gap: 'a' });
    expect(result).toEqual({ gap: 'a' });
  });

  it('should use an interface which marks `gap` as optional', () => {
    const result = gap<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = gap<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$Gap: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      gap: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = gap<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$Gap: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      gap: 'a',
      [theme.breakpoints.large]: {
        gap: 'b',
      },
      [theme.breakpoints.medium]: {
        gap: 'c',
      },
      [theme.breakpoints.small]: {
        gap: 'd',
      },
    });
  });
});
