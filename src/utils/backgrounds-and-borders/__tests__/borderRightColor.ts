import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { borderRightColor } from '../borderRightColor';

describe('borderRightColor', () => {
  it('should return a function', () => {
    const result = borderRightColor();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `borderRightColor` as component and css prop', () => {
    const result = borderRightColor()({ borderRightColor: 'inherit' });
    expect(result).toEqual({ borderRightColor: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderRightColor<'a'>()({ borderRightColor: 'a' });
    expect(result).toEqual({ borderRightColor: 'a' });
  });

  it('should use an interface which marks `borderRightColor` as optional', () => {
    const result = borderRightColor<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = borderRightColor<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ borderRightColor: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      borderRightColor: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderRightColor<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      borderRightColor: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      borderRightColor: 'a',
      [theme.breakpoints.large]: {
        borderRightColor: 'b',
      },
      [theme.breakpoints.medium]: {
        borderRightColor: 'c',
      },
      [theme.breakpoints.small]: {
        borderRightColor: 'd',
      },
    });
  });
});
