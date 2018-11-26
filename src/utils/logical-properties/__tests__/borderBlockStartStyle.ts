import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { borderBlockStartStyle } from '../borderBlockStartStyle';

describe('borderBlockStartStyle', () => {
  it('should return a function', () => {
    const result = borderBlockStartStyle();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `borderBlockStartStyle` as component and css prop', () => {
    const result = borderBlockStartStyle()({ borderBlockStartStyle: 'inherit' });
    expect(result).toEqual({ borderBlockStartStyle: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderBlockStartStyle<'a'>()({ borderBlockStartStyle: 'a' });
    expect(result).toEqual({ borderBlockStartStyle: 'a' });
  });

  it('should allow using a theme', () => {
    const result = borderBlockStartStyle<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ borderBlockStartStyle: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      borderBlockStartStyle: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderBlockStartStyle<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      borderBlockStartStyle: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      borderBlockStartStyle: 'a',
      [theme.breakpoints.large]: {
        borderBlockStartStyle: 'b',
      },
      [theme.breakpoints.medium]: {
        borderBlockStartStyle: 'c',
      },
      [theme.breakpoints.small]: {
        borderBlockStartStyle: 'd',
      },
    });
  });
});
