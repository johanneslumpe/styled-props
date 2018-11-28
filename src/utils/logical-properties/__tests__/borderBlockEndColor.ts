import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { borderBlockEndColor } from '../borderBlockEndColor';

describe('borderBlockEndColor', () => {
  it('should return a function', () => {
    const result = borderBlockEndColor();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `borderBlockEndColor` as component and css prop', () => {
    const result = borderBlockEndColor()({ borderBlockEndColor: 'inherit' });
    expect(result).toEqual({ borderBlockEndColor: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderBlockEndColor<'a'>()({ borderBlockEndColor: 'a' });
    expect(result).toEqual({ borderBlockEndColor: 'a' });
  });

  it('should use an interface which marks `borderBlockEndColor` as optional', () => {
    const result = borderBlockEndColor<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = borderBlockEndColor<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ borderBlockEndColor: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      borderBlockEndColor: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderBlockEndColor<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      borderBlockEndColor: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      borderBlockEndColor: 'a',
      [theme.breakpoints.large]: {
        borderBlockEndColor: 'b',
      },
      [theme.breakpoints.medium]: {
        borderBlockEndColor: 'c',
      },
      [theme.breakpoints.small]: {
        borderBlockEndColor: 'd',
      },
    });
  });
});
