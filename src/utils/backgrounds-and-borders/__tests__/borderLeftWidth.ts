import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { borderLeftWidth } from '../borderLeftWidth';

describe('borderLeftWidth', () => {
  it('should return a function', () => {
    const result = borderLeftWidth();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `borderLeftWidth` as component and css prop', () => {
    const result = borderLeftWidth()({ borderLeftWidth: 'inherit' });
    expect(result).toEqual({ borderLeftWidth: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderLeftWidth<'a'>()({ borderLeftWidth: 'a' });
    expect(result).toEqual({ borderLeftWidth: 'a' });
  });

  it('should allow using a theme', () => {
    const result = borderLeftWidth<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ borderLeftWidth: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      borderLeftWidth: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderLeftWidth<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      borderLeftWidth: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      borderLeftWidth: 'a',
      [theme.breakpoints.large]: {
        borderLeftWidth: 'b',
      },
      [theme.breakpoints.medium]: {
        borderLeftWidth: 'c',
      },
      [theme.breakpoints.small]: {
        borderLeftWidth: 'd',
      },
    });
  });
});
