import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { borderLeftColor } from '../borderLeftColor';

describe('borderLeftColor', () => {
  it('should return a function', () => {
    const result = borderLeftColor();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `borderLeftColor` as component and css prop', () => {
    const result = borderLeftColor()({ borderLeftColor: 'inherit' });
    expect(result).toEqual({ borderLeftColor: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderLeftColor<'a'>()({ borderLeftColor: 'a' });
    expect(result).toEqual({ borderLeftColor: 'a' });
  });

  it('should use an interface which marks `borderLeftColor` as optional', () => {
    const result = borderLeftColor<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = borderLeftColor<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ borderLeftColor: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      borderLeftColor: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderLeftColor<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      borderLeftColor: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      borderLeftColor: 'a',
      [theme.breakpoints.large]: {
        borderLeftColor: 'b',
      },
      [theme.breakpoints.medium]: {
        borderLeftColor: 'c',
      },
      [theme.breakpoints.small]: {
        borderLeftColor: 'd',
      },
    });
  });
});
