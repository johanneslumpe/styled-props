import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { borderInlineEndColor } from '../borderInlineEndColor';

describe('borderInlineEndColor', () => {
  it('should return a function', () => {
    const result = borderInlineEndColor();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `borderInlineEndColor` as component and css prop', () => {
    const result = borderInlineEndColor()({ style$BorderInlineEndColor: 'inherit' });
    expect(result).toEqual({ borderInlineEndColor: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderInlineEndColor<'a'>()({ style$BorderInlineEndColor: 'a' });
    expect(result).toEqual({ borderInlineEndColor: 'a' });
  });

  it('should use an interface which marks `borderInlineEndColor` as optional', () => {
    const result = borderInlineEndColor<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = borderInlineEndColor<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$BorderInlineEndColor: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      borderInlineEndColor: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderInlineEndColor<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$BorderInlineEndColor: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      borderInlineEndColor: 'a',
      [theme.breakpoints.large]: {
        borderInlineEndColor: 'b',
      },
      [theme.breakpoints.medium]: {
        borderInlineEndColor: 'c',
      },
      [theme.breakpoints.small]: {
        borderInlineEndColor: 'd',
      },
    });
  });
});
