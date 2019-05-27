import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { borderImageOutset } from '../borderImageOutset';

describe('borderImageOutset', () => {
  it('should return a function', () => {
    const result = borderImageOutset();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `borderImageOutset` as component and css prop', () => {
    const result = borderImageOutset()({ style$BorderImageOutset: 'inherit' });
    expect(result).toEqual({ borderImageOutset: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderImageOutset<'a'>()({ style$BorderImageOutset: 'a' });
    expect(result).toEqual({ borderImageOutset: 'a' });
  });

  it('should use an interface which marks `borderImageOutset` as optional', () => {
    const result = borderImageOutset<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = borderImageOutset<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$BorderImageOutset: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      borderImageOutset: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderImageOutset<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$BorderImageOutset: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      borderImageOutset: 'a',
      [theme.breakpoints.large]: {
        borderImageOutset: 'b',
      },
      [theme.breakpoints.medium]: {
        borderImageOutset: 'c',
      },
      [theme.breakpoints.small]: {
        borderImageOutset: 'd',
      },
    });
  });
});
