import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { textAlignLast } from '../textAlignLast';

describe('textAlignLast', () => {
  it('should return a function', () => {
    const result = textAlignLast();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `textAlignLast` as component and css prop', () => {
    const result = textAlignLast()({ style$TextAlignLast: 'inherit' });
    expect(result).toEqual({ textAlignLast: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = textAlignLast<'a'>()({ style$TextAlignLast: 'a' });
    expect(result).toEqual({ textAlignLast: 'a' });
  });

  it('should use an interface which marks `textAlignLast` as optional', () => {
    const result = textAlignLast<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = textAlignLast<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$TextAlignLast: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      textAlignLast: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = textAlignLast<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$TextAlignLast: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      textAlignLast: 'a',
      [theme.breakpoints.large]: {
        textAlignLast: 'b',
      },
      [theme.breakpoints.medium]: {
        textAlignLast: 'c',
      },
      [theme.breakpoints.small]: {
        textAlignLast: 'd',
      },
    });
  });
});
