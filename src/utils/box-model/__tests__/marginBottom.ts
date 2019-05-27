import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { marginBottom } from '../marginBottom';

describe('marginBottom', () => {
  it('should return a function', () => {
    const result = marginBottom();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `marginBottom` as component and css prop', () => {
    const result = marginBottom()({ style$MarginBottom: 'inherit' });
    expect(result).toEqual({ marginBottom: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = marginBottom<'a'>()({ style$MarginBottom: 'a' });
    expect(result).toEqual({ marginBottom: 'a' });
  });

  it('should use an interface which marks `marginBottom` as optional', () => {
    const result = marginBottom<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = marginBottom<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$MarginBottom: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      marginBottom: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = marginBottom<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$MarginBottom: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      marginBottom: 'a',
      [theme.breakpoints.large]: {
        marginBottom: 'b',
      },
      [theme.breakpoints.medium]: {
        marginBottom: 'c',
      },
      [theme.breakpoints.small]: {
        marginBottom: 'd',
      },
    });
  });
});
