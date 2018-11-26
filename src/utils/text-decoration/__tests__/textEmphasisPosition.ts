import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { textEmphasisPosition } from '../textEmphasisPosition';

describe('textEmphasisPosition', () => {
  it('should return a function', () => {
    const result = textEmphasisPosition();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `textEmphasisPosition` as component and css prop', () => {
    const result = textEmphasisPosition()({ textEmphasisPosition: 'inherit' });
    expect(result).toEqual({ textEmphasisPosition: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = textEmphasisPosition<'a'>()({ textEmphasisPosition: 'a' });
    expect(result).toEqual({ textEmphasisPosition: 'a' });
  });

  it('should allow using a theme', () => {
    const result = textEmphasisPosition<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ textEmphasisPosition: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      textEmphasisPosition: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = textEmphasisPosition<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      textEmphasisPosition: {
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
