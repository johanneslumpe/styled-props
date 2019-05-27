import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { insetInlineEnd } from '../insetInlineEnd';

describe('insetInlineEnd', () => {
  it('should return a function', () => {
    const result = insetInlineEnd();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `insetInlineEnd` as component and css prop', () => {
    const result = insetInlineEnd()({ style$InsetInlineEnd: 'inherit' });
    expect(result).toEqual({ insetInlineEnd: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = insetInlineEnd<'a'>()({ style$InsetInlineEnd: 'a' });
    expect(result).toEqual({ insetInlineEnd: 'a' });
  });

  it('should use an interface which marks `insetInlineEnd` as optional', () => {
    const result = insetInlineEnd<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = insetInlineEnd<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$InsetInlineEnd: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      insetInlineEnd: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = insetInlineEnd<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$InsetInlineEnd: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      insetInlineEnd: 'a',
      [theme.breakpoints.large]: {
        insetInlineEnd: 'b',
      },
      [theme.breakpoints.medium]: {
        insetInlineEnd: 'c',
      },
      [theme.breakpoints.small]: {
        insetInlineEnd: 'd',
      },
    });
  });
});
