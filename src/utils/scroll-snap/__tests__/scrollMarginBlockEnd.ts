import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { scrollMarginBlockEnd } from '../scrollMarginBlockEnd';

describe('scrollMarginBlockEnd', () => {
  it('should return a function', () => {
    const result = scrollMarginBlockEnd();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `scrollMarginBlockEnd` as component and css prop', () => {
    const result = scrollMarginBlockEnd()({ style$ScrollMarginBlockEnd: 'inherit' });
    expect(result).toEqual({ scrollMarginBlockEnd: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = scrollMarginBlockEnd<'a'>()({ style$ScrollMarginBlockEnd: 'a' });
    expect(result).toEqual({ scrollMarginBlockEnd: 'a' });
  });

  it('should use an interface which marks `scrollMarginBlockEnd` as optional', () => {
    const result = scrollMarginBlockEnd<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = scrollMarginBlockEnd<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$ScrollMarginBlockEnd: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      scrollMarginBlockEnd: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = scrollMarginBlockEnd<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$ScrollMarginBlockEnd: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      scrollMarginBlockEnd: 'a',
      [theme.breakpoints.large]: {
        scrollMarginBlockEnd: 'b',
      },
      [theme.breakpoints.medium]: {
        scrollMarginBlockEnd: 'c',
      },
      [theme.breakpoints.small]: {
        scrollMarginBlockEnd: 'd',
      },
    });
  });
});
