import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { listStylePosition } from '../listStylePosition';

describe('listStylePosition', () => {
  it('should return a function', () => {
    const result = listStylePosition();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `listStylePosition` as component and css prop', () => {
    const result = listStylePosition()({ style$ListStylePosition: 'inherit' });
    expect(result).toEqual({ listStylePosition: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = listStylePosition<'a'>()({ style$ListStylePosition: 'a' });
    expect(result).toEqual({ listStylePosition: 'a' });
  });

  it('should use an interface which marks `listStylePosition` as optional', () => {
    const result = listStylePosition<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = listStylePosition<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$ListStylePosition: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      listStylePosition: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = listStylePosition<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$ListStylePosition: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      listStylePosition: 'a',
      [theme.breakpoints.large]: {
        listStylePosition: 'b',
      },
      [theme.breakpoints.medium]: {
        listStylePosition: 'c',
      },
      [theme.breakpoints.small]: {
        listStylePosition: 'd',
      },
    });
  });
});
