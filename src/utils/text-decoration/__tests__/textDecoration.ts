import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { textDecoration } from '../textDecoration';

describe('textDecoration', () => {
  it('should return a function', () => {
    const result = textDecoration();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `textDecoration` as component and css prop', () => {
    const result = textDecoration()({ textDecoration: 'inherit' });
    expect(result).toEqual({ textDecoration: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = textDecoration<'a'>()({ textDecoration: 'a' });
    expect(result).toEqual({ textDecoration: 'a' });
  });

  it('should allow using a theme', () => {
    const result = textDecoration<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ textDecoration: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      textDecoration: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = textDecoration<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      textDecoration: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      textDecoration: 'a',
      [theme.breakpoints.large]: {
        textDecoration: 'b',
      },
      [theme.breakpoints.medium]: {
        textDecoration: 'c',
      },
      [theme.breakpoints.small]: {
        textDecoration: 'd',
      },
    });
  });
});
