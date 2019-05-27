import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { clear } from '../clear';

describe('clear', () => {
  it('should return a function', () => {
    const result = clear();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `clear` as component and css prop', () => {
    const result = clear()({ style$Clear: 'inherit' });
    expect(result).toEqual({ clear: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = clear<'a'>()({ style$Clear: 'a' });
    expect(result).toEqual({ clear: 'a' });
  });

  it('should use an interface which marks `clear` as optional', () => {
    const result = clear<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = clear<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$Clear: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      clear: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = clear<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$Clear: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      clear: 'a',
      [theme.breakpoints.large]: {
        clear: 'b',
      },
      [theme.breakpoints.medium]: {
        clear: 'c',
      },
      [theme.breakpoints.small]: {
        clear: 'd',
      },
    });
  });
});
