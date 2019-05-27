import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { placeContent } from '../placeContent';

describe('placeContent', () => {
  it('should return a function', () => {
    const result = placeContent();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `placeContent` as component and css prop', () => {
    const result = placeContent()({ style$PlaceContent: 'inherit' });
    expect(result).toEqual({ placeContent: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = placeContent<'a'>()({ style$PlaceContent: 'a' });
    expect(result).toEqual({ placeContent: 'a' });
  });

  it('should use an interface which marks `placeContent` as optional', () => {
    const result = placeContent<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = placeContent<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$PlaceContent: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      placeContent: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = placeContent<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$PlaceContent: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      placeContent: 'a',
      [theme.breakpoints.large]: {
        placeContent: 'b',
      },
      [theme.breakpoints.medium]: {
        placeContent: 'c',
      },
      [theme.breakpoints.small]: {
        placeContent: 'd',
      },
    });
  });
});
