import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { marginLeft } from '../marginLeft';

describe('marginLeft', () => {
  it('should return a function', () => {
    const result = marginLeft();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `marginLeft` as component and css prop', () => {
    const result = marginLeft()({ style$MarginLeft: 'inherit' });
    expect(result).toEqual({ marginLeft: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = marginLeft<'a'>()({ style$MarginLeft: 'a' });
    expect(result).toEqual({ marginLeft: 'a' });
  });

  it('should use an interface which marks `marginLeft` as optional', () => {
    const result = marginLeft<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = marginLeft<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$MarginLeft: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      marginLeft: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = marginLeft<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$MarginLeft: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      marginLeft: 'a',
      [theme.breakpoints.large]: {
        marginLeft: 'b',
      },
      [theme.breakpoints.medium]: {
        marginLeft: 'c',
      },
      [theme.breakpoints.small]: {
        marginLeft: 'd',
      },
    });
  });
});
