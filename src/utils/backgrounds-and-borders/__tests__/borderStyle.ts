import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { borderStyle } from '../borderStyle';

describe('borderStyle', () => {
  it('should return a function', () => {
    const result = borderStyle();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `borderStyle` as component and css prop', () => {
    const result = borderStyle()({ borderStyle: 'inherit' });
    expect(result).toEqual({ borderStyle: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderStyle<'a'>()({ borderStyle: 'a' });
    expect(result).toEqual({ borderStyle: 'a' });
  });

  it('should allow using a theme', () => {
    const result = borderStyle<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ borderStyle: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      borderStyle: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderStyle<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      borderStyle: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      borderStyle: 'a',
      [theme.breakpoints.large]: {
        borderStyle: 'b',
      },
      [theme.breakpoints.medium]: {
        borderStyle: 'c',
      },
      [theme.breakpoints.small]: {
        borderStyle: 'd',
      },
    });
  });
});
