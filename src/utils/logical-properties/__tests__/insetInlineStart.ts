import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { insetInlineStart } from '../insetInlineStart';

describe('insetInlineStart', () => {
  it('should return a function', () => {
    const result = insetInlineStart();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `insetInlineStart` as component and css prop', () => {
    const result = insetInlineStart()({ style$InsetInlineStart: 'inherit' });
    expect(result).toEqual({ insetInlineStart: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = insetInlineStart<'a'>()({ style$InsetInlineStart: 'a' });
    expect(result).toEqual({ insetInlineStart: 'a' });
  });

  it('should use an interface which marks `insetInlineStart` as optional', () => {
    const result = insetInlineStart<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = insetInlineStart<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$InsetInlineStart: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      insetInlineStart: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = insetInlineStart<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$InsetInlineStart: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      insetInlineStart: 'a',
      [theme.breakpoints.large]: {
        insetInlineStart: 'b',
      },
      [theme.breakpoints.medium]: {
        insetInlineStart: 'c',
      },
      [theme.breakpoints.small]: {
        insetInlineStart: 'd',
      },
    });
  });
});
