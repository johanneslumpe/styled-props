import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { borderWidth } from '../borderWidth';

describe('borderWidth', () => {
  it('should return a function', () => {
    const result = borderWidth();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `borderWidth` as component and css prop', () => {
    const result = borderWidth()({ borderWidth: 'inherit' });
    expect(result).toEqual({ borderWidth: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderWidth<'a'>()({ borderWidth: 'a' });
    expect(result).toEqual({ borderWidth: 'a' });
  });

  it('should allow using a theme', () => {
    const result = borderWidth<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ borderWidth: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      borderWidth: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderWidth<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      borderWidth: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      borderWidth: 'a',
      [theme.breakpoints.large]: {
        borderWidth: 'b',
      },
      [theme.breakpoints.medium]: {
        borderWidth: 'c',
      },
      [theme.breakpoints.small]: {
        borderWidth: 'd',
      },
    });
  });
});
