import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { borderBottomWidth } from '../borderBottomWidth';

describe('borderBottomWidth', () => {
  it('should return a function', () => {
    const result = borderBottomWidth();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `borderBottomWidth` as component and css prop', () => {
    const result = borderBottomWidth()({ borderBottomWidth: 'inherit' });
    expect(result).toEqual({ borderBottomWidth: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderBottomWidth<'a'>()({ borderBottomWidth: 'a' });
    expect(result).toEqual({ borderBottomWidth: 'a' });
  });

  it('should allow using a theme', () => {
    const result = borderBottomWidth<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ borderBottomWidth: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      borderBottomWidth: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderBottomWidth<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      borderBottomWidth: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      borderBottomWidth: 'a',
      [theme.breakpoints.large]: {
        borderBottomWidth: 'b',
      },
      [theme.breakpoints.medium]: {
        borderBottomWidth: 'c',
      },
      [theme.breakpoints.small]: {
        borderBottomWidth: 'd',
      },
    });
  });
});
