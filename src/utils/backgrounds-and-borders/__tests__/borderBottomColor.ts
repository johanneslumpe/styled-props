import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { borderBottomColor } from '../borderBottomColor';

describe('borderBottomColor', () => {
  it('should return a function', () => {
    const result = borderBottomColor();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `borderBottomColor` as component and css prop', () => {
    const result = borderBottomColor()({ borderBottomColor: 'inherit' });
    expect(result).toEqual({ borderBottomColor: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderBottomColor<'a'>()({ borderBottomColor: 'a' });
    expect(result).toEqual({ borderBottomColor: 'a' });
  });

  it('should allow using a theme', () => {
    const result = borderBottomColor<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ borderBottomColor: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      borderBottomColor: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderBottomColor<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      borderBottomColor: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      borderBottomColor: 'a',
      [theme.breakpoints.large]: {
        borderBottomColor: 'b',
      },
      [theme.breakpoints.medium]: {
        borderBottomColor: 'c',
      },
      [theme.breakpoints.small]: {
        borderBottomColor: 'd',
      },
    });
  });
});
