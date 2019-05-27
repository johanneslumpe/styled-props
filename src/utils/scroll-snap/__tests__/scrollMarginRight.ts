import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { scrollMarginRight } from '../scrollMarginRight';

describe('scrollMarginRight', () => {
  it('should return a function', () => {
    const result = scrollMarginRight();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `scrollMarginRight` as component and css prop', () => {
    const result = scrollMarginRight()({ style$ScrollMarginRight: 'inherit' });
    expect(result).toEqual({ scrollMarginRight: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = scrollMarginRight<'a'>()({ style$ScrollMarginRight: 'a' });
    expect(result).toEqual({ scrollMarginRight: 'a' });
  });

  it('should use an interface which marks `scrollMarginRight` as optional', () => {
    const result = scrollMarginRight<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = scrollMarginRight<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$ScrollMarginRight: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      scrollMarginRight: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = scrollMarginRight<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$ScrollMarginRight: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      scrollMarginRight: 'a',
      [theme.breakpoints.large]: {
        scrollMarginRight: 'b',
      },
      [theme.breakpoints.medium]: {
        scrollMarginRight: 'c',
      },
      [theme.breakpoints.small]: {
        scrollMarginRight: 'd',
      },
    });
  });
});
