import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { marginBlockStart } from '../marginBlockStart';

describe('marginBlockStart', () => {
  it('should return a function', () => {
    const result = marginBlockStart();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `marginBlockStart` as component and css prop', () => {
    const result = marginBlockStart()({ style$MarginBlockStart: 'inherit' });
    expect(result).toEqual({ marginBlockStart: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = marginBlockStart<'a'>()({ style$MarginBlockStart: 'a' });
    expect(result).toEqual({ marginBlockStart: 'a' });
  });

  it('should use an interface which marks `marginBlockStart` as optional', () => {
    const result = marginBlockStart<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = marginBlockStart<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$MarginBlockStart: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      marginBlockStart: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = marginBlockStart<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$MarginBlockStart: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      marginBlockStart: 'a',
      [theme.breakpoints.large]: {
        marginBlockStart: 'b',
      },
      [theme.breakpoints.medium]: {
        marginBlockStart: 'c',
      },
      [theme.breakpoints.small]: {
        marginBlockStart: 'd',
      },
    });
  });
});
