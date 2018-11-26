import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { fontVariantPosition } from '../fontVariantPosition';

describe('fontVariantPosition', () => {
  it('should return a function', () => {
    const result = fontVariantPosition();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `fontVariantPosition` as component and css prop', () => {
    const result = fontVariantPosition()({ fontVariantPosition: 'inherit' });
    expect(result).toEqual({ fontVariantPosition: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = fontVariantPosition<'a'>()({ fontVariantPosition: 'a' });
    expect(result).toEqual({ fontVariantPosition: 'a' });
  });

  it('should allow using a theme', () => {
    const result = fontVariantPosition<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ fontVariantPosition: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      fontVariantPosition: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = fontVariantPosition<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      fontVariantPosition: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      fontVariantPosition: 'a',
      [theme.breakpoints.large]: {
        fontVariantPosition: 'b',
      },
      [theme.breakpoints.medium]: {
        fontVariantPosition: 'c',
      },
      [theme.breakpoints.small]: {
        fontVariantPosition: 'd',
      },
    });
  });
});
