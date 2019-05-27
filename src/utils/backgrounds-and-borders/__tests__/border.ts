import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { border } from '../border';

describe('border', () => {
  it('should return a function', () => {
    const result = border();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `border` as component and css prop', () => {
    const result = border()({ style$Border: 'inherit' });
    expect(result).toEqual({ border: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = border<'a'>()({ style$Border: 'a' });
    expect(result).toEqual({ border: 'a' });
  });

  it('should use an interface which marks `border` as optional', () => {
    const result = border<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = border<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$Border: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      border: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = border<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$Border: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      border: 'a',
      [theme.breakpoints.large]: {
        border: 'b',
      },
      [theme.breakpoints.medium]: {
        border: 'c',
      },
      [theme.breakpoints.small]: {
        border: 'd',
      },
    });
  });
});
