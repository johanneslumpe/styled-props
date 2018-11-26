import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { textEmphasisColor } from '../textEmphasisColor';

describe('textEmphasisColor', () => {
  it('should return a function', () => {
    const result = textEmphasisColor();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `textEmphasisColor` as component and css prop', () => {
    const result = textEmphasisColor()({ textEmphasisColor: 'inherit' });
    expect(result).toEqual({ textEmphasisColor: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = textEmphasisColor<'a'>()({ textEmphasisColor: 'a' });
    expect(result).toEqual({ textEmphasisColor: 'a' });
  });

  it('should allow using a theme', () => {
    const result = textEmphasisColor<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ textEmphasisColor: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      textEmphasisColor: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = textEmphasisColor<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      textEmphasisColor: {
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
