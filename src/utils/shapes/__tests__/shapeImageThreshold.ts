import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { shapeImageThreshold } from '../shapeImageThreshold';

describe('shapeImageThreshold', () => {
  it('should return a function', () => {
    const result = shapeImageThreshold();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `shapeImageThreshold` as component and css prop', () => {
    const result = shapeImageThreshold()({ style$ShapeImageThreshold: 'inherit' });
    expect(result).toEqual({ shapeImageThreshold: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = shapeImageThreshold<'a'>()({ style$ShapeImageThreshold: 'a' });
    expect(result).toEqual({ shapeImageThreshold: 'a' });
  });

  it('should use an interface which marks `shapeImageThreshold` as optional', () => {
    const result = shapeImageThreshold<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = shapeImageThreshold<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$ShapeImageThreshold: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      shapeImageThreshold: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = shapeImageThreshold<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$ShapeImageThreshold: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      shapeImageThreshold: 'a',
      [theme.breakpoints.large]: {
        shapeImageThreshold: 'b',
      },
      [theme.breakpoints.medium]: {
        shapeImageThreshold: 'c',
      },
      [theme.breakpoints.small]: {
        shapeImageThreshold: 'd',
      },
    });
  });
});
