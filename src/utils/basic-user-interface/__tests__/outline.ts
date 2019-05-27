import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { outline } from '../outline';

describe('outline', () => {
  it('should return a function', () => {
    const result = outline();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `outline` as component and css prop', () => {
    const result = outline()({ style$Outline: 'inherit' });
    expect(result).toEqual({ outline: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = outline<'a'>()({ style$Outline: 'a' });
    expect(result).toEqual({ outline: 'a' });
  });

  it('should use an interface which marks `outline` as optional', () => {
    const result = outline<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = outline<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$Outline: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      outline: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = outline<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$Outline: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      outline: 'a',
      [theme.breakpoints.large]: {
        outline: 'b',
      },
      [theme.breakpoints.medium]: {
        outline: 'c',
      },
      [theme.breakpoints.small]: {
        outline: 'd',
      },
    });
  });
});
