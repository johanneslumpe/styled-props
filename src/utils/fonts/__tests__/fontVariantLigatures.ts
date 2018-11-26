import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { fontVariantLigatures } from '../fontVariantLigatures';

describe('fontVariantLigatures', () => {
  it('should return a function', () => {
    const result = fontVariantLigatures();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `fontVariantLigatures` as component and css prop', () => {
    const result = fontVariantLigatures()({ fontVariantLigatures: 'inherit' });
    expect(result).toEqual({ fontVariantLigatures: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = fontVariantLigatures<'a'>()({ fontVariantLigatures: 'a' });
    expect(result).toEqual({ fontVariantLigatures: 'a' });
  });

  it('should allow using a theme', () => {
    const result = fontVariantLigatures<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ fontVariantLigatures: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      fontVariantLigatures: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = fontVariantLigatures<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      fontVariantLigatures: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      fontVariantLigatures: 'a',
      [theme.breakpoints.large]: {
        fontVariantLigatures: 'b',
      },
      [theme.breakpoints.medium]: {
        fontVariantLigatures: 'c',
      },
      [theme.breakpoints.small]: {
        fontVariantLigatures: 'd',
      },
    });
  });
});
