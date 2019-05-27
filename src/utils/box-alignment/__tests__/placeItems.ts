import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { placeItems } from '../placeItems';

describe('placeItems', () => {
  it('should return a function', () => {
    const result = placeItems();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `placeItems` as component and css prop', () => {
    const result = placeItems()({ style$PlaceItems: 'inherit' });
    expect(result).toEqual({ placeItems: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = placeItems<'a'>()({ style$PlaceItems: 'a' });
    expect(result).toEqual({ placeItems: 'a' });
  });

  it('should use an interface which marks `placeItems` as optional', () => {
    const result = placeItems<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = placeItems<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$PlaceItems: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      placeItems: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = placeItems<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$PlaceItems: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      placeItems: 'a',
      [theme.breakpoints.large]: {
        placeItems: 'b',
      },
      [theme.breakpoints.medium]: {
        placeItems: 'c',
      },
      [theme.breakpoints.small]: {
        placeItems: 'd',
      },
    });
  });
});
