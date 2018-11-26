import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { textOrientation } from '../textOrientation';

describe('textOrientation', () => {
  it('should return a function', () => {
    const result = textOrientation();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `textOrientation` as component and css prop', () => {
    const result = textOrientation()({ textOrientation: 'inherit' });
    expect(result).toEqual({ textOrientation: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = textOrientation<'a'>()({ textOrientation: 'a' });
    expect(result).toEqual({ textOrientation: 'a' });
  });

  it('should allow using a theme', () => {
    const result = textOrientation<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ textOrientation: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      textOrientation: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = textOrientation<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      textOrientation: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      textOrientation: 'a',
      [theme.breakpoints.large]: {
        textOrientation: 'b',
      },
      [theme.breakpoints.medium]: {
        textOrientation: 'c',
      },
      [theme.breakpoints.small]: {
        textOrientation: 'd',
      },
    });
  });
});
