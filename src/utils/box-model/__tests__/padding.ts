import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { padding } from '../padding';

describe('padding', () => {
  it('should return a function', () => {
    const result = padding();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `padding` as component and css prop', () => {
    const result = padding()({ style$Padding: 'inherit' });
    expect(result).toEqual({ padding: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = padding<'a'>()({ style$Padding: 'a' });
    expect(result).toEqual({ padding: 'a' });
  });

  it('should use an interface which marks `padding` as optional', () => {
    const result = padding<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = padding<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$Padding: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      padding: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = padding<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$Padding: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      padding: 'a',
      [theme.breakpoints.large]: {
        padding: 'b',
      },
      [theme.breakpoints.medium]: {
        padding: 'c',
      },
      [theme.breakpoints.small]: {
        padding: 'd',
      },
    });
  });
});
