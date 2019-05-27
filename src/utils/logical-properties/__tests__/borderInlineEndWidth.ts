import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { borderInlineEndWidth } from '../borderInlineEndWidth';

describe('borderInlineEndWidth', () => {
  it('should return a function', () => {
    const result = borderInlineEndWidth();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `borderInlineEndWidth` as component and css prop', () => {
    const result = borderInlineEndWidth()({ style$BorderInlineEndWidth: 'inherit' });
    expect(result).toEqual({ borderInlineEndWidth: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderInlineEndWidth<'a'>()({ style$BorderInlineEndWidth: 'a' });
    expect(result).toEqual({ borderInlineEndWidth: 'a' });
  });

  it('should use an interface which marks `borderInlineEndWidth` as optional', () => {
    const result = borderInlineEndWidth<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = borderInlineEndWidth<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$BorderInlineEndWidth: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      borderInlineEndWidth: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderInlineEndWidth<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$BorderInlineEndWidth: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      borderInlineEndWidth: 'a',
      [theme.breakpoints.large]: {
        borderInlineEndWidth: 'b',
      },
      [theme.breakpoints.medium]: {
        borderInlineEndWidth: 'c',
      },
      [theme.breakpoints.small]: {
        borderInlineEndWidth: 'd',
      },
    });
  });
});
