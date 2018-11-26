import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { textIndent } from '../textIndent';

describe('textIndent', () => {
  it('should return a function', () => {
    const result = textIndent();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `textIndent` as component and css prop', () => {
    const result = textIndent()({ textIndent: 'inherit' });
    expect(result).toEqual({ textIndent: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = textIndent<'a'>()({ textIndent: 'a' });
    expect(result).toEqual({ textIndent: 'a' });
  });

  it('should allow using a theme', () => {
    const result = textIndent<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ textIndent: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      textIndent: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = textIndent<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      textIndent: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      textIndent: 'a',
      [theme.breakpoints.large]: {
        textIndent: 'b',
      },
      [theme.breakpoints.medium]: {
        textIndent: 'c',
      },
      [theme.breakpoints.small]: {
        textIndent: 'd',
      },
    });
  });
});
