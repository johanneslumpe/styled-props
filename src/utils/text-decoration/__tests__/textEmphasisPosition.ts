import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { textEmphasisPosition } from '../textEmphasisPosition';

describe('textEmphasisPosition', () => {
  it('should return a function', () => {
    const result = textEmphasisPosition();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `textEmphasisPosition` as component and css prop', () => {
    const result = textEmphasisPosition()({ style$TextEmphasisPosition: 'inherit' });
    expect(result).toEqual({ textEmphasisPosition: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = textEmphasisPosition<'a'>()({ style$TextEmphasisPosition: 'a' });
    expect(result).toEqual({ textEmphasisPosition: 'a' });
  });

  it('should use an interface which marks `textEmphasisPosition` as optional', () => {
    const result = textEmphasisPosition<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = textEmphasisPosition<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$TextEmphasisPosition: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      textEmphasisPosition: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = textEmphasisPosition<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$TextEmphasisPosition: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      textEmphasisPosition: 'a',
      [theme.breakpoints.large]: {
        textEmphasisPosition: 'b',
      },
      [theme.breakpoints.medium]: {
        textEmphasisPosition: 'c',
      },
      [theme.breakpoints.small]: {
        textEmphasisPosition: 'd',
      },
    });
  });
});
