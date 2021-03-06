import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { textShadow } from '../textShadow';

describe('textShadow', () => {
  it('should return a function', () => {
    const result = textShadow();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `textShadow` as component and css prop', () => {
    const result = textShadow()({ style$TextShadow: 'inherit' });
    expect(result).toEqual({ textShadow: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = textShadow<'a'>()({ style$TextShadow: 'a' });
    expect(result).toEqual({ textShadow: 'a' });
  });

  it('should use an interface which marks `textShadow` as optional', () => {
    const result = textShadow<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = textShadow<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$TextShadow: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      textShadow: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = textShadow<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$TextShadow: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      textShadow: 'a',
      [theme.breakpoints.large]: {
        textShadow: 'b',
      },
      [theme.breakpoints.medium]: {
        textShadow: 'c',
      },
      [theme.breakpoints.small]: {
        textShadow: 'd',
      },
    });
  });
});
