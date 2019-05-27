import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { unicodeBidi } from '../unicodeBidi';

describe('unicodeBidi', () => {
  it('should return a function', () => {
    const result = unicodeBidi();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `unicodeBidi` as component and css prop', () => {
    const result = unicodeBidi()({ style$UnicodeBidi: 'inherit' });
    expect(result).toEqual({ unicodeBidi: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = unicodeBidi<'a'>()({ style$UnicodeBidi: 'a' });
    expect(result).toEqual({ unicodeBidi: 'a' });
  });

  it('should use an interface which marks `unicodeBidi` as optional', () => {
    const result = unicodeBidi<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = unicodeBidi<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$UnicodeBidi: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      unicodeBidi: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = unicodeBidi<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$UnicodeBidi: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      unicodeBidi: 'a',
      [theme.breakpoints.large]: {
        unicodeBidi: 'b',
      },
      [theme.breakpoints.medium]: {
        unicodeBidi: 'c',
      },
      [theme.breakpoints.small]: {
        unicodeBidi: 'd',
      },
    });
  });
});
