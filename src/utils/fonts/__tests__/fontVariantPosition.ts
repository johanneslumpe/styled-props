import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { fontVariantPosition } from '../fontVariantPosition';

describe('fontVariantPosition', () => {
  it('should return a function', () => {
    const result = fontVariantPosition();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `fontVariantPosition` as component and css prop', () => {
    const result = fontVariantPosition()({ style$FontVariantPosition: 'inherit' });
    expect(result).toEqual({ fontVariantPosition: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = fontVariantPosition<'a'>()({ style$FontVariantPosition: 'a' });
    expect(result).toEqual({ fontVariantPosition: 'a' });
  });

  it('should use an interface which marks `fontVariantPosition` as optional', () => {
    const result = fontVariantPosition<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = fontVariantPosition<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$FontVariantPosition: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      fontVariantPosition: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = fontVariantPosition<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$FontVariantPosition: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      fontVariantPosition: 'a',
      [theme.breakpoints.large]: {
        fontVariantPosition: 'b',
      },
      [theme.breakpoints.medium]: {
        fontVariantPosition: 'c',
      },
      [theme.breakpoints.small]: {
        fontVariantPosition: 'd',
      },
    });
  });
});
