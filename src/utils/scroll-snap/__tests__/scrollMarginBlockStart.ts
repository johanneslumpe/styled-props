import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { scrollMarginBlockStart } from '../scrollMarginBlockStart';

describe('scrollMarginBlockStart', () => {
  it('should return a function', () => {
    const result = scrollMarginBlockStart();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `scrollMarginBlockStart` as component and css prop', () => {
    const result = scrollMarginBlockStart()({ style$ScrollMarginBlockStart: 'inherit' });
    expect(result).toEqual({ scrollMarginBlockStart: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = scrollMarginBlockStart<'a'>()({ style$ScrollMarginBlockStart: 'a' });
    expect(result).toEqual({ scrollMarginBlockStart: 'a' });
  });

  it('should use an interface which marks `scrollMarginBlockStart` as optional', () => {
    const result = scrollMarginBlockStart<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = scrollMarginBlockStart<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$ScrollMarginBlockStart: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      scrollMarginBlockStart: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = scrollMarginBlockStart<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$ScrollMarginBlockStart: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      scrollMarginBlockStart: 'a',
      [theme.breakpoints.large]: {
        scrollMarginBlockStart: 'b',
      },
      [theme.breakpoints.medium]: {
        scrollMarginBlockStart: 'c',
      },
      [theme.breakpoints.small]: {
        scrollMarginBlockStart: 'd',
      },
    });
  });
});
