import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { borderInlineEndColor } from '../borderInlineEndColor';

describe('borderInlineEndColor', () => {
  it('should return a function', () => {
    const result = borderInlineEndColor();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `borderInlineEndColor` as component and css prop', () => {
    const result = borderInlineEndColor()({ borderInlineEndColor: 'inherit' });
    expect(result).toEqual({ borderInlineEndColor: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderInlineEndColor<'a'>()({ borderInlineEndColor: 'a' });
    expect(result).toEqual({ borderInlineEndColor: 'a' });
  });

  it('should allow using a theme', () => {
    const result = borderInlineEndColor<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ borderInlineEndColor: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      borderInlineEndColor: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderInlineEndColor<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      borderInlineEndColor: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      borderInlineEndColor: 'a',
      [theme.breakpoints.large]: {
        borderInlineEndColor: 'b',
      },
      [theme.breakpoints.medium]: {
        borderInlineEndColor: 'c',
      },
      [theme.breakpoints.small]: {
        borderInlineEndColor: 'd',
      },
    });
  });
});
