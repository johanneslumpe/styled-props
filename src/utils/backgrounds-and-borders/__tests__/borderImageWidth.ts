import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { borderImageWidth } from '../borderImageWidth';

describe('borderImageWidth', () => {
  it('should return a function', () => {
    const result = borderImageWidth();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `borderImageWidth` as component and css prop', () => {
    const result = borderImageWidth()({ style$BorderImageWidth: 'inherit' });
    expect(result).toEqual({ borderImageWidth: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderImageWidth<'a'>()({ style$BorderImageWidth: 'a' });
    expect(result).toEqual({ borderImageWidth: 'a' });
  });

  it('should use an interface which marks `borderImageWidth` as optional', () => {
    const result = borderImageWidth<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = borderImageWidth<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$BorderImageWidth: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      borderImageWidth: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderImageWidth<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$BorderImageWidth: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      borderImageWidth: 'a',
      [theme.breakpoints.large]: {
        borderImageWidth: 'b',
      },
      [theme.breakpoints.medium]: {
        borderImageWidth: 'c',
      },
      [theme.breakpoints.small]: {
        borderImageWidth: 'd',
      },
    });
  });
});
