import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { borderInlineStartStyle } from '../borderInlineStartStyle';

describe('borderInlineStartStyle', () => {
  it('should return a function', () => {
    const result = borderInlineStartStyle();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `borderInlineStartStyle` as component and css prop', () => {
    const result = borderInlineStartStyle()({ borderInlineStartStyle: 'inherit' });
    expect(result).toEqual({ borderInlineStartStyle: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderInlineStartStyle<'a'>()({ borderInlineStartStyle: 'a' });
    expect(result).toEqual({ borderInlineStartStyle: 'a' });
  });

  it('should allow using a theme', () => {
    const result = borderInlineStartStyle<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ borderInlineStartStyle: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      borderInlineStartStyle: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderInlineStartStyle<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      borderInlineStartStyle: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      borderInlineStartStyle: 'a',
      [theme.breakpoints.large]: {
        borderInlineStartStyle: 'b',
      },
      [theme.breakpoints.medium]: {
        borderInlineStartStyle: 'c',
      },
      [theme.breakpoints.small]: {
        borderInlineStartStyle: 'd',
      },
    });
  });
});
