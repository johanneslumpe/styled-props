import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { breakAfter } from '../breakAfter';

describe('breakAfter', () => {
  it('should return a function', () => {
    const result = breakAfter();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `breakAfter` as component and css prop', () => {
    const result = breakAfter()({ style$BreakAfter: 'inherit' });
    expect(result).toEqual({ breakAfter: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = breakAfter<'a'>()({ style$BreakAfter: 'a' });
    expect(result).toEqual({ breakAfter: 'a' });
  });

  it('should use an interface which marks `breakAfter` as optional', () => {
    const result = breakAfter<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = breakAfter<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$BreakAfter: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      breakAfter: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = breakAfter<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$BreakAfter: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      breakAfter: 'a',
      [theme.breakpoints.large]: {
        breakAfter: 'b',
      },
      [theme.breakpoints.medium]: {
        breakAfter: 'c',
      },
      [theme.breakpoints.small]: {
        breakAfter: 'd',
      },
    });
  });
});
