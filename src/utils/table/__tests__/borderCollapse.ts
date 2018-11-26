import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { borderCollapse } from '../borderCollapse';

describe('borderCollapse', () => {
  it('should return a function', () => {
    const result = borderCollapse();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `borderCollapse` as component and css prop', () => {
    const result = borderCollapse()({ borderCollapse: 'inherit' });
    expect(result).toEqual({ borderCollapse: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderCollapse<'a'>()({ borderCollapse: 'a' });
    expect(result).toEqual({ borderCollapse: 'a' });
  });

  it('should allow using a theme', () => {
    const result = borderCollapse<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ borderCollapse: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      borderCollapse: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderCollapse<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      borderCollapse: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      borderCollapse: 'a',
      [theme.breakpoints.large]: {
        borderCollapse: 'b',
      },
      [theme.breakpoints.medium]: {
        borderCollapse: 'c',
      },
      [theme.breakpoints.small]: {
        borderCollapse: 'd',
      },
    });
  });
});
