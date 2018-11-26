import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { fontVariantEastAsian } from '../fontVariantEastAsian';

describe('fontVariantEastAsian', () => {
  it('should return a function', () => {
    const result = fontVariantEastAsian();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `fontVariantEastAsian` as component and css prop', () => {
    const result = fontVariantEastAsian()({ fontVariantEastAsian: 'inherit' });
    expect(result).toEqual({ fontVariantEastAsian: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = fontVariantEastAsian<'a'>()({ fontVariantEastAsian: 'a' });
    expect(result).toEqual({ fontVariantEastAsian: 'a' });
  });

  it('should allow using a theme', () => {
    const result = fontVariantEastAsian<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ fontVariantEastAsian: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      fontVariantEastAsian: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = fontVariantEastAsian<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      fontVariantEastAsian: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      fontVariantEastAsian: 'a',
      [theme.breakpoints.large]: {
        fontVariantEastAsian: 'b',
      },
      [theme.breakpoints.medium]: {
        fontVariantEastAsian: 'c',
      },
      [theme.breakpoints.small]: {
        fontVariantEastAsian: 'd',
      },
    });
  });
});
