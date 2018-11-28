import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { borderRightWidth } from '../borderRightWidth';

describe('borderRightWidth', () => {
  it('should return a function', () => {
    const result = borderRightWidth();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `borderRightWidth` as component and css prop', () => {
    const result = borderRightWidth()({ borderRightWidth: 'inherit' });
    expect(result).toEqual({ borderRightWidth: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderRightWidth<'a'>()({ borderRightWidth: 'a' });
    expect(result).toEqual({ borderRightWidth: 'a' });
  });

  it('should use an interface which marks `borderRightWidth` as optional', () => {
    const result = borderRightWidth<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = borderRightWidth<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ borderRightWidth: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      borderRightWidth: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderRightWidth<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      borderRightWidth: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      borderRightWidth: 'a',
      [theme.breakpoints.large]: {
        borderRightWidth: 'b',
      },
      [theme.breakpoints.medium]: {
        borderRightWidth: 'c',
      },
      [theme.breakpoints.small]: {
        borderRightWidth: 'd',
      },
    });
  });
});
