import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { transformBox } from '../transformBox';

describe('transformBox', () => {
  it('should return a function', () => {
    const result = transformBox();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `transformBox` as component and css prop', () => {
    const result = transformBox()({ style$TransformBox: 'inherit' });
    expect(result).toEqual({ transformBox: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = transformBox<'a'>()({ style$TransformBox: 'a' });
    expect(result).toEqual({ transformBox: 'a' });
  });

  it('should use an interface which marks `transformBox` as optional', () => {
    const result = transformBox<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = transformBox<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$TransformBox: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      transformBox: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = transformBox<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$TransformBox: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      transformBox: 'a',
      [theme.breakpoints.large]: {
        transformBox: 'b',
      },
      [theme.breakpoints.medium]: {
        transformBox: 'c',
      },
      [theme.breakpoints.small]: {
        transformBox: 'd',
      },
    });
  });
});
