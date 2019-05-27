import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { borderInline } from '../borderInline';

describe('borderInline', () => {
  it('should return a function', () => {
    const result = borderInline();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `borderInline` as component and css prop', () => {
    const result = borderInline()({ style$BorderInline: 'inherit' });
    expect(result).toEqual({ borderInline: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderInline<'a'>()({ style$BorderInline: 'a' });
    expect(result).toEqual({ borderInline: 'a' });
  });

  it('should use an interface which marks `borderInline` as optional', () => {
    const result = borderInline<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = borderInline<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$BorderInline: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      borderInline: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderInline<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$BorderInline: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      borderInline: 'a',
      [theme.breakpoints.large]: {
        borderInline: 'b',
      },
      [theme.breakpoints.medium]: {
        borderInline: 'c',
      },
      [theme.breakpoints.small]: {
        borderInline: 'd',
      },
    });
  });
});
