import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { borderInlineStartColor } from '../borderInlineStartColor';

describe('borderInlineStartColor', () => {
  it('should return a function', () => {
    const result = borderInlineStartColor();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `borderInlineStartColor` as component and css prop', () => {
    const result = borderInlineStartColor()({ borderInlineStartColor: 'inherit' });
    expect(result).toEqual({ borderInlineStartColor: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderInlineStartColor<'a'>()({ borderInlineStartColor: 'a' });
    expect(result).toEqual({ borderInlineStartColor: 'a' });
  });

  it('should allow using a theme', () => {
    const result = borderInlineStartColor<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ borderInlineStartColor: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      borderInlineStartColor: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderInlineStartColor<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      borderInlineStartColor: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      borderInlineStartColor: 'a',
      [theme.breakpoints.large]: {
        borderInlineStartColor: 'b',
      },
      [theme.breakpoints.medium]: {
        borderInlineStartColor: 'c',
      },
      [theme.breakpoints.small]: {
        borderInlineStartColor: 'd',
      },
    });
  });
});
