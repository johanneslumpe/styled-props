import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { borderBlockEndWidth } from '../borderBlockEndWidth';

describe('borderBlockEndWidth', () => {
  it('should return a function', () => {
    const result = borderBlockEndWidth();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `borderBlockEndWidth` as component and css prop', () => {
    const result = borderBlockEndWidth()({ borderBlockEndWidth: 'inherit' });
    expect(result).toEqual({ borderBlockEndWidth: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderBlockEndWidth<'a'>()({ borderBlockEndWidth: 'a' });
    expect(result).toEqual({ borderBlockEndWidth: 'a' });
  });

  it('should use an interface which marks `borderBlockEndWidth` as optional', () => {
    const result = borderBlockEndWidth<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = borderBlockEndWidth<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ borderBlockEndWidth: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      borderBlockEndWidth: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderBlockEndWidth<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      borderBlockEndWidth: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      borderBlockEndWidth: 'a',
      [theme.breakpoints.large]: {
        borderBlockEndWidth: 'b',
      },
      [theme.breakpoints.medium]: {
        borderBlockEndWidth: 'c',
      },
      [theme.breakpoints.small]: {
        borderBlockEndWidth: 'd',
      },
    });
  });
});
