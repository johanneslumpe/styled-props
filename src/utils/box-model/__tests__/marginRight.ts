import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { marginRight } from '../marginRight';

describe('marginRight', () => {
  it('should return a function', () => {
    const result = marginRight();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `marginRight` as component and css prop', () => {
    const result = marginRight()({ style$MarginRight: 'inherit' });
    expect(result).toEqual({ marginRight: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = marginRight<'a'>()({ style$MarginRight: 'a' });
    expect(result).toEqual({ marginRight: 'a' });
  });

  it('should use an interface which marks `marginRight` as optional', () => {
    const result = marginRight<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = marginRight<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$MarginRight: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      marginRight: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = marginRight<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$MarginRight: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      marginRight: 'a',
      [theme.breakpoints.large]: {
        marginRight: 'b',
      },
      [theme.breakpoints.medium]: {
        marginRight: 'c',
      },
      [theme.breakpoints.small]: {
        marginRight: 'd',
      },
    });
  });
});
