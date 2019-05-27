import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { insetInline } from '../insetInline';

describe('insetInline', () => {
  it('should return a function', () => {
    const result = insetInline();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `insetInline` as component and css prop', () => {
    const result = insetInline()({ style$InsetInline: 'inherit' });
    expect(result).toEqual({ insetInline: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = insetInline<'a'>()({ style$InsetInline: 'a' });
    expect(result).toEqual({ insetInline: 'a' });
  });

  it('should use an interface which marks `insetInline` as optional', () => {
    const result = insetInline<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = insetInline<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$InsetInline: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      insetInline: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = insetInline<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$InsetInline: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      insetInline: 'a',
      [theme.breakpoints.large]: {
        insetInline: 'b',
      },
      [theme.breakpoints.medium]: {
        insetInline: 'c',
      },
      [theme.breakpoints.small]: {
        insetInline: 'd',
      },
    });
  });
});
