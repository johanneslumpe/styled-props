import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { fontVariant } from '../fontVariant';

describe('fontVariant', () => {
  it('should return a function', () => {
    const result = fontVariant();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `fontVariant` as component and css prop', () => {
    const result = fontVariant()({ style$FontVariant: 'inherit' });
    expect(result).toEqual({ fontVariant: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = fontVariant<'a'>()({ style$FontVariant: 'a' });
    expect(result).toEqual({ fontVariant: 'a' });
  });

  it('should use an interface which marks `fontVariant` as optional', () => {
    const result = fontVariant<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = fontVariant<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$FontVariant: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      fontVariant: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = fontVariant<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$FontVariant: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      fontVariant: 'a',
      [theme.breakpoints.large]: {
        fontVariant: 'b',
      },
      [theme.breakpoints.medium]: {
        fontVariant: 'c',
      },
      [theme.breakpoints.small]: {
        fontVariant: 'd',
      },
    });
  });
});
