import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { listStyleImage } from '../listStyleImage';

describe('listStyleImage', () => {
  it('should return a function', () => {
    const result = listStyleImage();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `listStyleImage` as component and css prop', () => {
    const result = listStyleImage()({ style$ListStyleImage: 'inherit' });
    expect(result).toEqual({ listStyleImage: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = listStyleImage<'a'>()({ style$ListStyleImage: 'a' });
    expect(result).toEqual({ listStyleImage: 'a' });
  });

  it('should use an interface which marks `listStyleImage` as optional', () => {
    const result = listStyleImage<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = listStyleImage<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$ListStyleImage: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      listStyleImage: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = listStyleImage<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$ListStyleImage: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      listStyleImage: 'a',
      [theme.breakpoints.large]: {
        listStyleImage: 'b',
      },
      [theme.breakpoints.medium]: {
        listStyleImage: 'c',
      },
      [theme.breakpoints.small]: {
        listStyleImage: 'd',
      },
    });
  });
});
