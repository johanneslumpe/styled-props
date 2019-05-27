import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { margin } from '../margin';

describe('margin', () => {
  it('should return a function', () => {
    const result = margin();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `margin` as component and css prop', () => {
    const result = margin()({ style$Margin: 'inherit' });
    expect(result).toEqual({ margin: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = margin<'a'>()({ style$Margin: 'a' });
    expect(result).toEqual({ margin: 'a' });
  });

  it('should use an interface which marks `margin` as optional', () => {
    const result = margin<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = margin<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$Margin: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      margin: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = margin<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$Margin: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      margin: 'a',
      [theme.breakpoints.large]: {
        margin: 'b',
      },
      [theme.breakpoints.medium]: {
        margin: 'c',
      },
      [theme.breakpoints.small]: {
        margin: 'd',
      },
    });
  });
});
