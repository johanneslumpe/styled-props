import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { textEmphasisColor } from '../textEmphasisColor';

describe('textEmphasisColor', () => {
  it('should return a function', () => {
    const result = textEmphasisColor();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `textEmphasisColor` as component and css prop', () => {
    const result = textEmphasisColor()({ style$TextEmphasisColor: 'inherit' });
    expect(result).toEqual({ textEmphasisColor: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = textEmphasisColor<'a'>()({ style$TextEmphasisColor: 'a' });
    expect(result).toEqual({ textEmphasisColor: 'a' });
  });

  it('should use an interface which marks `textEmphasisColor` as optional', () => {
    const result = textEmphasisColor<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = textEmphasisColor<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$TextEmphasisColor: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      textEmphasisColor: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = textEmphasisColor<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$TextEmphasisColor: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      textEmphasisColor: 'a',
      [theme.breakpoints.large]: {
        textEmphasisColor: 'b',
      },
      [theme.breakpoints.medium]: {
        textEmphasisColor: 'c',
      },
      [theme.breakpoints.small]: {
        textEmphasisColor: 'd',
      },
    });
  });
});
