import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { maskPosition } from '../maskPosition';

describe('maskPosition', () => {
  it('should return a function', () => {
    const result = maskPosition();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `maskPosition` as component and css prop', () => {
    const result = maskPosition()({ style$MaskPosition: 'inherit' });
    expect(result).toEqual({ maskPosition: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = maskPosition<'a'>()({ style$MaskPosition: 'a' });
    expect(result).toEqual({ maskPosition: 'a' });
  });

  it('should use an interface which marks `maskPosition` as optional', () => {
    const result = maskPosition<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = maskPosition<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$MaskPosition: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      maskPosition: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = maskPosition<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$MaskPosition: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      maskPosition: 'a',
      [theme.breakpoints.large]: {
        maskPosition: 'b',
      },
      [theme.breakpoints.medium]: {
        maskPosition: 'c',
      },
      [theme.breakpoints.small]: {
        maskPosition: 'd',
      },
    });
  });
});
