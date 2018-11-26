import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { borderLeftStyle } from '../borderLeftStyle';

describe('borderLeftStyle', () => {
  it('should return a function', () => {
    const result = borderLeftStyle();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `borderLeftStyle` as component and css prop', () => {
    const result = borderLeftStyle()({ borderLeftStyle: 'inherit' });
    expect(result).toEqual({ borderLeftStyle: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderLeftStyle<'a'>()({ borderLeftStyle: 'a' });
    expect(result).toEqual({ borderLeftStyle: 'a' });
  });

  it('should allow using a theme', () => {
    const result = borderLeftStyle<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ borderLeftStyle: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      borderLeftStyle: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderLeftStyle<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      borderLeftStyle: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      borderLeftStyle: 'a',
      [theme.breakpoints.large]: {
        borderLeftStyle: 'b',
      },
      [theme.breakpoints.medium]: {
        borderLeftStyle: 'c',
      },
      [theme.breakpoints.small]: {
        borderLeftStyle: 'd',
      },
    });
  });
});
