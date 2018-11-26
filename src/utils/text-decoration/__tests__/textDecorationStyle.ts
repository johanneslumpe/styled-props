import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { textDecorationStyle } from '../textDecorationStyle';

describe('textDecorationStyle', () => {
  it('should return a function', () => {
    const result = textDecorationStyle();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `textDecorationStyle` as component and css prop', () => {
    const result = textDecorationStyle()({ textDecorationStyle: 'inherit' });
    expect(result).toEqual({ textDecorationStyle: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = textDecorationStyle<'a'>()({ textDecorationStyle: 'a' });
    expect(result).toEqual({ textDecorationStyle: 'a' });
  });

  it('should allow using a theme', () => {
    const result = textDecorationStyle<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ textDecorationStyle: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      textDecorationStyle: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = textDecorationStyle<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      textDecorationStyle: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      textDecorationStyle: 'a',
      [theme.breakpoints.large]: {
        textDecorationStyle: 'b',
      },
      [theme.breakpoints.medium]: {
        textDecorationStyle: 'c',
      },
      [theme.breakpoints.small]: {
        textDecorationStyle: 'd',
      },
    });
  });
});
