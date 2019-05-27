import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { boxSizing } from '../boxSizing';

describe('boxSizing', () => {
  it('should return a function', () => {
    const result = boxSizing();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `boxSizing` as component and css prop', () => {
    const result = boxSizing()({ style$BoxSizing: 'inherit' });
    expect(result).toEqual({ boxSizing: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = boxSizing<'a'>()({ style$BoxSizing: 'a' });
    expect(result).toEqual({ boxSizing: 'a' });
  });

  it('should use an interface which marks `boxSizing` as optional', () => {
    const result = boxSizing<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = boxSizing<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$BoxSizing: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      boxSizing: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = boxSizing<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$BoxSizing: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      boxSizing: 'a',
      [theme.breakpoints.large]: {
        boxSizing: 'b',
      },
      [theme.breakpoints.medium]: {
        boxSizing: 'c',
      },
      [theme.breakpoints.small]: {
        boxSizing: 'd',
      },
    });
  });
});
