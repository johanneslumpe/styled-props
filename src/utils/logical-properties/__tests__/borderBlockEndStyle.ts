import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { borderBlockEndStyle } from '../borderBlockEndStyle';

describe('borderBlockEndStyle', () => {
  it('should return a function', () => {
    const result = borderBlockEndStyle();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `borderBlockEndStyle` as component and css prop', () => {
    const result = borderBlockEndStyle()({ borderBlockEndStyle: 'inherit' });
    expect(result).toEqual({ borderBlockEndStyle: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderBlockEndStyle<'a'>()({ borderBlockEndStyle: 'a' });
    expect(result).toEqual({ borderBlockEndStyle: 'a' });
  });

  it('should allow using a theme', () => {
    const result = borderBlockEndStyle<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ borderBlockEndStyle: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      borderBlockEndStyle: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderBlockEndStyle<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      borderBlockEndStyle: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      borderBlockEndStyle: 'a',
      [theme.breakpoints.large]: {
        borderBlockEndStyle: 'b',
      },
      [theme.breakpoints.medium]: {
        borderBlockEndStyle: 'c',
      },
      [theme.breakpoints.small]: {
        borderBlockEndStyle: 'd',
      },
    });
  });
});
