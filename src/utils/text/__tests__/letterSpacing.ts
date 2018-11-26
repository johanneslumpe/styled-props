import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { letterSpacing } from '../letterSpacing';

describe('letterSpacing', () => {
  it('should return a function', () => {
    const result = letterSpacing();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `letterSpacing` as component and css prop', () => {
    const result = letterSpacing()({ letterSpacing: 'inherit' });
    expect(result).toEqual({ letterSpacing: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = letterSpacing<'a'>()({ letterSpacing: 'a' });
    expect(result).toEqual({ letterSpacing: 'a' });
  });

  it('should allow using a theme', () => {
    const result = letterSpacing<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ letterSpacing: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      letterSpacing: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = letterSpacing<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      letterSpacing: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      letterSpacing: 'a',
      [theme.breakpoints.large]: {
        letterSpacing: 'b',
      },
      [theme.breakpoints.medium]: {
        letterSpacing: 'c',
      },
      [theme.breakpoints.small]: {
        letterSpacing: 'd',
      },
    });
  });
});
