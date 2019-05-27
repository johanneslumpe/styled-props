import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { placeSelf } from '../placeSelf';

describe('placeSelf', () => {
  it('should return a function', () => {
    const result = placeSelf();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `placeSelf` as component and css prop', () => {
    const result = placeSelf()({ style$PlaceSelf: 'inherit' });
    expect(result).toEqual({ placeSelf: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = placeSelf<'a'>()({ style$PlaceSelf: 'a' });
    expect(result).toEqual({ placeSelf: 'a' });
  });

  it('should use an interface which marks `placeSelf` as optional', () => {
    const result = placeSelf<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = placeSelf<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$PlaceSelf: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      placeSelf: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = placeSelf<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$PlaceSelf: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      placeSelf: 'a',
      [theme.breakpoints.large]: {
        placeSelf: 'b',
      },
      [theme.breakpoints.medium]: {
        placeSelf: 'c',
      },
      [theme.breakpoints.small]: {
        placeSelf: 'd',
      },
    });
  });
});
