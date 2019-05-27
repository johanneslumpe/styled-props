import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { shapeMargin } from '../shapeMargin';

describe('shapeMargin', () => {
  it('should return a function', () => {
    const result = shapeMargin();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `shapeMargin` as component and css prop', () => {
    const result = shapeMargin()({ style$ShapeMargin: 'inherit' });
    expect(result).toEqual({ shapeMargin: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = shapeMargin<'a'>()({ style$ShapeMargin: 'a' });
    expect(result).toEqual({ shapeMargin: 'a' });
  });

  it('should use an interface which marks `shapeMargin` as optional', () => {
    const result = shapeMargin<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = shapeMargin<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$ShapeMargin: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      shapeMargin: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = shapeMargin<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$ShapeMargin: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      shapeMargin: 'a',
      [theme.breakpoints.large]: {
        shapeMargin: 'b',
      },
      [theme.breakpoints.medium]: {
        shapeMargin: 'c',
      },
      [theme.breakpoints.small]: {
        shapeMargin: 'd',
      },
    });
  });
});
