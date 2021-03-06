import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { textEmphasisStyle } from '../textEmphasisStyle';

describe('textEmphasisStyle', () => {
  it('should return a function', () => {
    const result = textEmphasisStyle();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `textEmphasisStyle` as component and css prop', () => {
    const result = textEmphasisStyle()({ style$TextEmphasisStyle: 'inherit' });
    expect(result).toEqual({ textEmphasisStyle: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = textEmphasisStyle<'a'>()({ style$TextEmphasisStyle: 'a' });
    expect(result).toEqual({ textEmphasisStyle: 'a' });
  });

  it('should use an interface which marks `textEmphasisStyle` as optional', () => {
    const result = textEmphasisStyle<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = textEmphasisStyle<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$TextEmphasisStyle: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      textEmphasisStyle: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = textEmphasisStyle<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$TextEmphasisStyle: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      textEmphasisStyle: 'a',
      [theme.breakpoints.large]: {
        textEmphasisStyle: 'b',
      },
      [theme.breakpoints.medium]: {
        textEmphasisStyle: 'c',
      },
      [theme.breakpoints.small]: {
        textEmphasisStyle: 'd',
      },
    });
  });
});
