import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { alignSelf } from '../alignSelf';

describe('alignSelf', () => {
  it('should return a function', () => {
    const result = alignSelf();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `alignSelf` as component and css prop', () => {
    const result = alignSelf()({ style$AlignSelf: 'inherit' });
    expect(result).toEqual({ alignSelf: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = alignSelf<'a'>()({ style$AlignSelf: 'a' });
    expect(result).toEqual({ alignSelf: 'a' });
  });

  it('should use an interface which marks `alignSelf` as optional', () => {
    const result = alignSelf<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = alignSelf<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$AlignSelf: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      alignSelf: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = alignSelf<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$AlignSelf: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      alignSelf: 'a',
      [theme.breakpoints.large]: {
        alignSelf: 'b',
      },
      [theme.breakpoints.medium]: {
        alignSelf: 'c',
      },
      [theme.breakpoints.small]: {
        alignSelf: 'd',
      },
    });
  });
});
