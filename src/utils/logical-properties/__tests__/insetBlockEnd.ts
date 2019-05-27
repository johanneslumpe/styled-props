import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { insetBlockEnd } from '../insetBlockEnd';

describe('insetBlockEnd', () => {
  it('should return a function', () => {
    const result = insetBlockEnd();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `insetBlockEnd` as component and css prop', () => {
    const result = insetBlockEnd()({ style$InsetBlockEnd: 'inherit' });
    expect(result).toEqual({ insetBlockEnd: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = insetBlockEnd<'a'>()({ style$InsetBlockEnd: 'a' });
    expect(result).toEqual({ insetBlockEnd: 'a' });
  });

  it('should use an interface which marks `insetBlockEnd` as optional', () => {
    const result = insetBlockEnd<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = insetBlockEnd<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$InsetBlockEnd: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      insetBlockEnd: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = insetBlockEnd<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$InsetBlockEnd: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      insetBlockEnd: 'a',
      [theme.breakpoints.large]: {
        insetBlockEnd: 'b',
      },
      [theme.breakpoints.medium]: {
        insetBlockEnd: 'c',
      },
      [theme.breakpoints.small]: {
        insetBlockEnd: 'd',
      },
    });
  });
});
