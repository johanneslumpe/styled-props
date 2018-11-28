import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { borderTopColor } from '../borderTopColor';

describe('borderTopColor', () => {
  it('should return a function', () => {
    const result = borderTopColor();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `borderTopColor` as component and css prop', () => {
    const result = borderTopColor()({ borderTopColor: 'inherit' });
    expect(result).toEqual({ borderTopColor: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderTopColor<'a'>()({ borderTopColor: 'a' });
    expect(result).toEqual({ borderTopColor: 'a' });
  });

  it('should use an interface which marks `borderTopColor` as optional', () => {
    const result = borderTopColor<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = borderTopColor<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ borderTopColor: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      borderTopColor: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderTopColor<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      borderTopColor: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      borderTopColor: 'a',
      [theme.breakpoints.large]: {
        borderTopColor: 'b',
      },
      [theme.breakpoints.medium]: {
        borderTopColor: 'c',
      },
      [theme.breakpoints.small]: {
        borderTopColor: 'd',
      },
    });
  });
});
