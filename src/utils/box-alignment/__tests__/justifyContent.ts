import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { justifyContent } from '../justifyContent';

describe('justifyContent', () => {
  it('should return a function', () => {
    const result = justifyContent();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `justifyContent` as component and css prop', () => {
    const result = justifyContent()({ style$JustifyContent: 'inherit' });
    expect(result).toEqual({ justifyContent: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = justifyContent<'a'>()({ style$JustifyContent: 'a' });
    expect(result).toEqual({ justifyContent: 'a' });
  });

  it('should use an interface which marks `justifyContent` as optional', () => {
    const result = justifyContent<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = justifyContent<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$JustifyContent: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      justifyContent: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = justifyContent<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$JustifyContent: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      justifyContent: 'a',
      [theme.breakpoints.large]: {
        justifyContent: 'b',
      },
      [theme.breakpoints.medium]: {
        justifyContent: 'c',
      },
      [theme.breakpoints.small]: {
        justifyContent: 'd',
      },
    });
  });
});
