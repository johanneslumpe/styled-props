import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { fontKerning } from '../fontKerning';

describe('fontKerning', () => {
  it('should return a function', () => {
    const result = fontKerning();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `fontKerning` as component and css prop', () => {
    const result = fontKerning()({ fontKerning: 'inherit' });
    expect(result).toEqual({ fontKerning: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = fontKerning<'a'>()({ fontKerning: 'a' });
    expect(result).toEqual({ fontKerning: 'a' });
  });

  it('should allow using a theme', () => {
    const result = fontKerning<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ fontKerning: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      fontKerning: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = fontKerning<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      fontKerning: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      fontKerning: 'a',
      [theme.breakpoints.large]: {
        fontKerning: 'b',
      },
      [theme.breakpoints.medium]: {
        fontKerning: 'c',
      },
      [theme.breakpoints.small]: {
        fontKerning: 'd',
      },
    });
  });
});
