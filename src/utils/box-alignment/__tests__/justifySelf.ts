import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { justifySelf } from '../justifySelf';

describe('justifySelf', () => {
  it('should return a function', () => {
    const result = justifySelf();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `justifySelf` as component and css prop', () => {
    const result = justifySelf()({ style$JustifySelf: 'inherit' });
    expect(result).toEqual({ justifySelf: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = justifySelf<'a'>()({ style$JustifySelf: 'a' });
    expect(result).toEqual({ justifySelf: 'a' });
  });

  it('should use an interface which marks `justifySelf` as optional', () => {
    const result = justifySelf<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = justifySelf<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$JustifySelf: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      justifySelf: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = justifySelf<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$JustifySelf: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      justifySelf: 'a',
      [theme.breakpoints.large]: {
        justifySelf: 'b',
      },
      [theme.breakpoints.medium]: {
        justifySelf: 'c',
      },
      [theme.breakpoints.small]: {
        justifySelf: 'd',
      },
    });
  });
});
