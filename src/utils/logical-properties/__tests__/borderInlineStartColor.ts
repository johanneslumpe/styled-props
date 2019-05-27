import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { borderInlineStartColor } from '../borderInlineStartColor';

describe('borderInlineStartColor', () => {
  it('should return a function', () => {
    const result = borderInlineStartColor();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `borderInlineStartColor` as component and css prop', () => {
    const result = borderInlineStartColor()({ style$BorderInlineStartColor: 'inherit' });
    expect(result).toEqual({ borderInlineStartColor: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderInlineStartColor<'a'>()({ style$BorderInlineStartColor: 'a' });
    expect(result).toEqual({ borderInlineStartColor: 'a' });
  });

  it('should use an interface which marks `borderInlineStartColor` as optional', () => {
    const result = borderInlineStartColor<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = borderInlineStartColor<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$BorderInlineStartColor: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      borderInlineStartColor: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderInlineStartColor<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$BorderInlineStartColor: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      borderInlineStartColor: 'a',
      [theme.breakpoints.large]: {
        borderInlineStartColor: 'b',
      },
      [theme.breakpoints.medium]: {
        borderInlineStartColor: 'c',
      },
      [theme.breakpoints.small]: {
        borderInlineStartColor: 'd',
      },
    });
  });
});
