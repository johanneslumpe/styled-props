import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { height } from '../height';

describe('height', () => {
  it('should return a function', () => {
    const result = height();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `height` as component and css prop', () => {
    const result = height()({ style$Height: 'inherit' });
    expect(result).toEqual({ height: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = height<'a'>()({ style$Height: 'a' });
    expect(result).toEqual({ height: 'a' });
  });

  it('should use an interface which marks `height` as optional', () => {
    const result = height<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = height<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$Height: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      height: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = height<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$Height: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      height: 'a',
      [theme.breakpoints.large]: {
        height: 'b',
      },
      [theme.breakpoints.medium]: {
        height: 'c',
      },
      [theme.breakpoints.small]: {
        height: 'd',
      },
    });
  });
});
