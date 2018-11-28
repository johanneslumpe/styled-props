import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { fontVariantAlternates } from '../fontVariantAlternates';

describe('fontVariantAlternates', () => {
  it('should return a function', () => {
    const result = fontVariantAlternates();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `fontVariantAlternates` as component and css prop', () => {
    const result = fontVariantAlternates()({ fontVariantAlternates: 'inherit' });
    expect(result).toEqual({ fontVariantAlternates: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = fontVariantAlternates<'a'>()({ fontVariantAlternates: 'a' });
    expect(result).toEqual({ fontVariantAlternates: 'a' });
  });

  it('should use an interface which marks `fontVariantAlternates` as optional', () => {
    const result = fontVariantAlternates<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = fontVariantAlternates<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ fontVariantAlternates: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      fontVariantAlternates: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = fontVariantAlternates<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      fontVariantAlternates: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      fontVariantAlternates: 'a',
      [theme.breakpoints.large]: {
        fontVariantAlternates: 'b',
      },
      [theme.breakpoints.medium]: {
        fontVariantAlternates: 'c',
      },
      [theme.breakpoints.small]: {
        fontVariantAlternates: 'd',
      },
    });
  });
});
