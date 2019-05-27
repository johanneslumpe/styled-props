import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { borderImageSource } from '../borderImageSource';

describe('borderImageSource', () => {
  it('should return a function', () => {
    const result = borderImageSource();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `borderImageSource` as component and css prop', () => {
    const result = borderImageSource()({ style$BorderImageSource: 'inherit' });
    expect(result).toEqual({ borderImageSource: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderImageSource<'a'>()({ style$BorderImageSource: 'a' });
    expect(result).toEqual({ borderImageSource: 'a' });
  });

  it('should use an interface which marks `borderImageSource` as optional', () => {
    const result = borderImageSource<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = borderImageSource<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$BorderImageSource: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      borderImageSource: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderImageSource<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$BorderImageSource: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      borderImageSource: 'a',
      [theme.breakpoints.large]: {
        borderImageSource: 'b',
      },
      [theme.breakpoints.medium]: {
        borderImageSource: 'c',
      },
      [theme.breakpoints.small]: {
        borderImageSource: 'd',
      },
    });
  });
});
