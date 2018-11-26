import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { borderSpacing } from '../borderSpacing';

describe('borderSpacing', () => {
  it('should return a function', () => {
    const result = borderSpacing();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `borderSpacing` as component and css prop', () => {
    const result = borderSpacing()({ borderSpacing: 'inherit' });
    expect(result).toEqual({ borderSpacing: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderSpacing<'a'>()({ borderSpacing: 'a' });
    expect(result).toEqual({ borderSpacing: 'a' });
  });

  it('should allow using a theme', () => {
    const result = borderSpacing<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ borderSpacing: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      borderSpacing: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderSpacing<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      borderSpacing: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      borderSpacing: 'a',
      [theme.breakpoints.large]: {
        borderSpacing: 'b',
      },
      [theme.breakpoints.medium]: {
        borderSpacing: 'c',
      },
      [theme.breakpoints.small]: {
        borderSpacing: 'd',
      },
    });
  });
});
