import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { borderBottomStyle } from '../borderBottomStyle';

describe('borderBottomStyle', () => {
  it('should return a function', () => {
    const result = borderBottomStyle();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `borderBottomStyle` as component and css prop', () => {
    const result = borderBottomStyle()({ borderBottomStyle: 'inherit' });
    expect(result).toEqual({ borderBottomStyle: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderBottomStyle<'a'>()({ borderBottomStyle: 'a' });
    expect(result).toEqual({ borderBottomStyle: 'a' });
  });

  it('should allow using a theme', () => {
    const result = borderBottomStyle<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ borderBottomStyle: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      borderBottomStyle: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderBottomStyle<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      borderBottomStyle: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      borderBottomStyle: 'a',
      [theme.breakpoints.large]: {
        borderBottomStyle: 'b',
      },
      [theme.breakpoints.medium]: {
        borderBottomStyle: 'c',
      },
      [theme.breakpoints.small]: {
        borderBottomStyle: 'd',
      },
    });
  });
});
