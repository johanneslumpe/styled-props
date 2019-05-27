import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { textEmphasis } from '../textEmphasis';

describe('textEmphasis', () => {
  it('should return a function', () => {
    const result = textEmphasis();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `textEmphasis` as component and css prop', () => {
    const result = textEmphasis()({ style$TextEmphasis: 'inherit' });
    expect(result).toEqual({ textEmphasis: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = textEmphasis<'a'>()({ style$TextEmphasis: 'a' });
    expect(result).toEqual({ textEmphasis: 'a' });
  });

  it('should use an interface which marks `textEmphasis` as optional', () => {
    const result = textEmphasis<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = textEmphasis<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$TextEmphasis: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      textEmphasis: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = textEmphasis<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$TextEmphasis: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      textEmphasis: 'a',
      [theme.breakpoints.large]: {
        textEmphasis: 'b',
      },
      [theme.breakpoints.medium]: {
        textEmphasis: 'c',
      },
      [theme.breakpoints.small]: {
        textEmphasis: 'd',
      },
    });
  });
});
