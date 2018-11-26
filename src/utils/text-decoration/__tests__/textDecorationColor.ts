import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { textDecorationColor } from '../textDecorationColor';

describe('textDecorationColor', () => {
  it('should return a function', () => {
    const result = textDecorationColor();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `textDecorationColor` as component and css prop', () => {
    const result = textDecorationColor()({ textDecorationColor: 'inherit' });
    expect(result).toEqual({ textDecorationColor: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = textDecorationColor<'a'>()({ textDecorationColor: 'a' });
    expect(result).toEqual({ textDecorationColor: 'a' });
  });

  it('should allow using a theme', () => {
    const result = textDecorationColor<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ textDecorationColor: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      textDecorationColor: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = textDecorationColor<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      textDecorationColor: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      textDecorationColor: 'a',
      [theme.breakpoints.large]: {
        textDecorationColor: 'b',
      },
      [theme.breakpoints.medium]: {
        textDecorationColor: 'c',
      },
      [theme.breakpoints.small]: {
        textDecorationColor: 'd',
      },
    });
  });
});
