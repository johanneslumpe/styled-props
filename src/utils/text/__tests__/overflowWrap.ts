import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { overflowWrap } from '../overflowWrap';

describe('overflowWrap', () => {
  it('should return a function', () => {
    const result = overflowWrap();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `overflowWrap` as component and css prop', () => {
    const result = overflowWrap()({ style$OverflowWrap: 'inherit' });
    expect(result).toEqual({ overflowWrap: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = overflowWrap<'a'>()({ style$OverflowWrap: 'a' });
    expect(result).toEqual({ overflowWrap: 'a' });
  });

  it('should use an interface which marks `overflowWrap` as optional', () => {
    const result = overflowWrap<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = overflowWrap<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$OverflowWrap: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      overflowWrap: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = overflowWrap<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$OverflowWrap: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      overflowWrap: 'a',
      [theme.breakpoints.large]: {
        overflowWrap: 'b',
      },
      [theme.breakpoints.medium]: {
        overflowWrap: 'c',
      },
      [theme.breakpoints.small]: {
        overflowWrap: 'd',
      },
    });
  });
});
