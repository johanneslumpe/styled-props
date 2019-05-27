import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { marginBlockEnd } from '../marginBlockEnd';

describe('marginBlockEnd', () => {
  it('should return a function', () => {
    const result = marginBlockEnd();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `marginBlockEnd` as component and css prop', () => {
    const result = marginBlockEnd()({ style$MarginBlockEnd: 'inherit' });
    expect(result).toEqual({ marginBlockEnd: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = marginBlockEnd<'a'>()({ style$MarginBlockEnd: 'a' });
    expect(result).toEqual({ marginBlockEnd: 'a' });
  });

  it('should use an interface which marks `marginBlockEnd` as optional', () => {
    const result = marginBlockEnd<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = marginBlockEnd<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$MarginBlockEnd: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      marginBlockEnd: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = marginBlockEnd<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$MarginBlockEnd: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      marginBlockEnd: 'a',
      [theme.breakpoints.large]: {
        marginBlockEnd: 'b',
      },
      [theme.breakpoints.medium]: {
        marginBlockEnd: 'c',
      },
      [theme.breakpoints.small]: {
        marginBlockEnd: 'd',
      },
    });
  });
});
