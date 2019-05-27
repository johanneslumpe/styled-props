import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { borderInlineColor } from '../borderInlineColor';

describe('borderInlineColor', () => {
  it('should return a function', () => {
    const result = borderInlineColor();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `borderInlineColor` as component and css prop', () => {
    const result = borderInlineColor()({ style$BorderInlineColor: 'inherit' });
    expect(result).toEqual({ borderInlineColor: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderInlineColor<'a'>()({ style$BorderInlineColor: 'a' });
    expect(result).toEqual({ borderInlineColor: 'a' });
  });

  it('should use an interface which marks `borderInlineColor` as optional', () => {
    const result = borderInlineColor<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = borderInlineColor<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$BorderInlineColor: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      borderInlineColor: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderInlineColor<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$BorderInlineColor: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      borderInlineColor: 'a',
      [theme.breakpoints.large]: {
        borderInlineColor: 'b',
      },
      [theme.breakpoints.medium]: {
        borderInlineColor: 'c',
      },
      [theme.breakpoints.small]: {
        borderInlineColor: 'd',
      },
    });
  });
});
