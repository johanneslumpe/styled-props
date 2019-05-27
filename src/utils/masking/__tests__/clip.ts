import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { clip } from '../clip';

describe('clip', () => {
  it('should return a function', () => {
    const result = clip();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `clip` as component and css prop', () => {
    const result = clip()({ style$Clip: 'inherit' });
    expect(result).toEqual({ clip: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = clip<'a'>()({ style$Clip: 'a' });
    expect(result).toEqual({ clip: 'a' });
  });

  it('should use an interface which marks `clip` as optional', () => {
    const result = clip<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = clip<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$Clip: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      clip: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = clip<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$Clip: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      clip: 'a',
      [theme.breakpoints.large]: {
        clip: 'b',
      },
      [theme.breakpoints.medium]: {
        clip: 'c',
      },
      [theme.breakpoints.small]: {
        clip: 'd',
      },
    });
  });
});
