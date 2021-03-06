import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { breakBefore } from '../breakBefore';

describe('breakBefore', () => {
  it('should return a function', () => {
    const result = breakBefore();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `breakBefore` as component and css prop', () => {
    const result = breakBefore()({ style$BreakBefore: 'inherit' });
    expect(result).toEqual({ breakBefore: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = breakBefore<'a'>()({ style$BreakBefore: 'a' });
    expect(result).toEqual({ breakBefore: 'a' });
  });

  it('should use an interface which marks `breakBefore` as optional', () => {
    const result = breakBefore<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = breakBefore<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$BreakBefore: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      breakBefore: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = breakBefore<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$BreakBefore: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      breakBefore: 'a',
      [theme.breakpoints.large]: {
        breakBefore: 'b',
      },
      [theme.breakpoints.medium]: {
        breakBefore: 'c',
      },
      [theme.breakpoints.small]: {
        breakBefore: 'd',
      },
    });
  });
});
