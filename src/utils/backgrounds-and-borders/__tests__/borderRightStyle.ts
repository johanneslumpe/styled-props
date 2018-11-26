import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { borderRightStyle } from '../borderRightStyle';

describe('borderRightStyle', () => {
  it('should return a function', () => {
    const result = borderRightStyle();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `borderRightStyle` as component and css prop', () => {
    const result = borderRightStyle()({ borderRightStyle: 'inherit' });
    expect(result).toEqual({ borderRightStyle: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderRightStyle<'a'>()({ borderRightStyle: 'a' });
    expect(result).toEqual({ borderRightStyle: 'a' });
  });

  it('should allow using a theme', () => {
    const result = borderRightStyle<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ borderRightStyle: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      borderRightStyle: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderRightStyle<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      borderRightStyle: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      borderRightStyle: 'a',
      [theme.breakpoints.large]: {
        borderRightStyle: 'b',
      },
      [theme.breakpoints.medium]: {
        borderRightStyle: 'c',
      },
      [theme.breakpoints.small]: {
        borderRightStyle: 'd',
      },
    });
  });
});
