import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { backfaceVisibility } from '../backfaceVisibility';

describe('backfaceVisibility', () => {
  it('should return a function', () => {
    const result = backfaceVisibility();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `backfaceVisibility` as component and css prop', () => {
    const result = backfaceVisibility()({ style$BackfaceVisibility: 'inherit' });
    expect(result).toEqual({ backfaceVisibility: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = backfaceVisibility<'a'>()({ style$BackfaceVisibility: 'a' });
    expect(result).toEqual({ backfaceVisibility: 'a' });
  });

  it('should use an interface which marks `backfaceVisibility` as optional', () => {
    const result = backfaceVisibility<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = backfaceVisibility<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$BackfaceVisibility: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      backfaceVisibility: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = backfaceVisibility<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$BackfaceVisibility: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      backfaceVisibility: 'a',
      [theme.breakpoints.large]: {
        backfaceVisibility: 'b',
      },
      [theme.breakpoints.medium]: {
        backfaceVisibility: 'c',
      },
      [theme.breakpoints.small]: {
        backfaceVisibility: 'd',
      },
    });
  });
});
