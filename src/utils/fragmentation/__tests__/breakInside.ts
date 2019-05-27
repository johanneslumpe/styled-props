import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { breakInside } from '../breakInside';

describe('breakInside', () => {
  it('should return a function', () => {
    const result = breakInside();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `breakInside` as component and css prop', () => {
    const result = breakInside()({ style$BreakInside: 'inherit' });
    expect(result).toEqual({ breakInside: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = breakInside<'a'>()({ style$BreakInside: 'a' });
    expect(result).toEqual({ breakInside: 'a' });
  });

  it('should use an interface which marks `breakInside` as optional', () => {
    const result = breakInside<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = breakInside<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$BreakInside: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      breakInside: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = breakInside<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$BreakInside: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      breakInside: 'a',
      [theme.breakpoints.large]: {
        breakInside: 'b',
      },
      [theme.breakpoints.medium]: {
        breakInside: 'c',
      },
      [theme.breakpoints.small]: {
        breakInside: 'd',
      },
    });
  });
});
