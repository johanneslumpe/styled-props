import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { fontStretch } from '../fontStretch';

describe('fontStretch', () => {
  it('should return a function', () => {
    const result = fontStretch();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `fontStretch` as component and css prop', () => {
    const result = fontStretch()({ style$FontStretch: 'inherit' });
    expect(result).toEqual({ fontStretch: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = fontStretch<'a'>()({ style$FontStretch: 'a' });
    expect(result).toEqual({ fontStretch: 'a' });
  });

  it('should use an interface which marks `fontStretch` as optional', () => {
    const result = fontStretch<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = fontStretch<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$FontStretch: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      fontStretch: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = fontStretch<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$FontStretch: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      fontStretch: 'a',
      [theme.breakpoints.large]: {
        fontStretch: 'b',
      },
      [theme.breakpoints.medium]: {
        fontStretch: 'c',
      },
      [theme.breakpoints.small]: {
        fontStretch: 'd',
      },
    });
  });
});
