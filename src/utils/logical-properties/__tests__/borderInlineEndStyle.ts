import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { borderInlineEndStyle } from '../borderInlineEndStyle';

describe('borderInlineEndStyle', () => {
  it('should return a function', () => {
    const result = borderInlineEndStyle();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `borderInlineEndStyle` as component and css prop', () => {
    const result = borderInlineEndStyle()({ borderInlineEndStyle: 'inherit' });
    expect(result).toEqual({ borderInlineEndStyle: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderInlineEndStyle<'a'>()({ borderInlineEndStyle: 'a' });
    expect(result).toEqual({ borderInlineEndStyle: 'a' });
  });

  it('should allow using a theme', () => {
    const result = borderInlineEndStyle<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ borderInlineEndStyle: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      borderInlineEndStyle: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderInlineEndStyle<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      borderInlineEndStyle: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      borderInlineEndStyle: 'a',
      [theme.breakpoints.large]: {
        borderInlineEndStyle: 'b',
      },
      [theme.breakpoints.medium]: {
        borderInlineEndStyle: 'c',
      },
      [theme.breakpoints.small]: {
        borderInlineEndStyle: 'd',
      },
    });
  });
});