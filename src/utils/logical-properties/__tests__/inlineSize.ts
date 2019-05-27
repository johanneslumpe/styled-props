import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { inlineSize } from '../inlineSize';

describe('inlineSize', () => {
  it('should return a function', () => {
    const result = inlineSize();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `inlineSize` as component and css prop', () => {
    const result = inlineSize()({ style$InlineSize: 'inherit' });
    expect(result).toEqual({ inlineSize: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = inlineSize<'a'>()({ style$InlineSize: 'a' });
    expect(result).toEqual({ inlineSize: 'a' });
  });

  it('should use an interface which marks `inlineSize` as optional', () => {
    const result = inlineSize<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = inlineSize<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$InlineSize: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      inlineSize: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = inlineSize<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$InlineSize: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      inlineSize: 'a',
      [theme.breakpoints.large]: {
        inlineSize: 'b',
      },
      [theme.breakpoints.medium]: {
        inlineSize: 'c',
      },
      [theme.breakpoints.small]: {
        inlineSize: 'd',
      },
    });
  });
});
