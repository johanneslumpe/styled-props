import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { fontVariantNumeric } from '../fontVariantNumeric';

describe('fontVariantNumeric', () => {
  it('should return a function', () => {
    const result = fontVariantNumeric();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `fontVariantNumeric` as component and css prop', () => {
    const result = fontVariantNumeric()({ fontVariantNumeric: 'inherit' });
    expect(result).toEqual({ fontVariantNumeric: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = fontVariantNumeric<'a'>()({ fontVariantNumeric: 'a' });
    expect(result).toEqual({ fontVariantNumeric: 'a' });
  });

  it('should allow using a theme', () => {
    const result = fontVariantNumeric<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ fontVariantNumeric: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      fontVariantNumeric: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = fontVariantNumeric<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      fontVariantNumeric: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      fontVariantNumeric: 'a',
      [theme.breakpoints.large]: {
        fontVariantNumeric: 'b',
      },
      [theme.breakpoints.medium]: {
        fontVariantNumeric: 'c',
      },
      [theme.breakpoints.small]: {
        fontVariantNumeric: 'd',
      },
    });
  });
});
