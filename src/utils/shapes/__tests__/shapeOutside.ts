import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { shapeOutside } from '../shapeOutside';

describe('shapeOutside', () => {
  it('should return a function', () => {
    const result = shapeOutside();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `shapeOutside` as component and css prop', () => {
    const result = shapeOutside()({ style$ShapeOutside: 'inherit' });
    expect(result).toEqual({ shapeOutside: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = shapeOutside<'a'>()({ style$ShapeOutside: 'a' });
    expect(result).toEqual({ shapeOutside: 'a' });
  });

  it('should use an interface which marks `shapeOutside` as optional', () => {
    const result = shapeOutside<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = shapeOutside<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$ShapeOutside: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      shapeOutside: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = shapeOutside<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$ShapeOutside: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      shapeOutside: 'a',
      [theme.breakpoints.large]: {
        shapeOutside: 'b',
      },
      [theme.breakpoints.medium]: {
        shapeOutside: 'c',
      },
      [theme.breakpoints.small]: {
        shapeOutside: 'd',
      },
    });
  });
});
