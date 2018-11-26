import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { color } from '../color';

describe('color', () => {
  it('should return a function', () => {
    const result = color();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `color` as component and css prop', () => {
    const result = color()({ color: 'inherit' });
    expect(result).toEqual({ color: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = color<'a'>()({ color: 'a' });
    expect(result).toEqual({ color: 'a' });
  });

  it('should allow using a theme', () => {
    const result = color<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ color: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      color: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = color<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      color: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      color: 'a',
      [theme.breakpoints.large]: {
        color: 'b',
      },
      [theme.breakpoints.medium]: {
        color: 'c',
      },
      [theme.breakpoints.small]: {
        color: 'd',
      },
    });
  });
});
