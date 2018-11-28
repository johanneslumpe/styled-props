import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { borderTopStyle } from '../borderTopStyle';

describe('borderTopStyle', () => {
  it('should return a function', () => {
    const result = borderTopStyle();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `borderTopStyle` as component and css prop', () => {
    const result = borderTopStyle()({ borderTopStyle: 'inherit' });
    expect(result).toEqual({ borderTopStyle: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderTopStyle<'a'>()({ borderTopStyle: 'a' });
    expect(result).toEqual({ borderTopStyle: 'a' });
  });

  it('should use an interface which marks `borderTopStyle` as optional', () => {
    const result = borderTopStyle<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = borderTopStyle<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ borderTopStyle: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      borderTopStyle: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderTopStyle<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      borderTopStyle: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      borderTopStyle: 'a',
      [theme.breakpoints.large]: {
        borderTopStyle: 'b',
      },
      [theme.breakpoints.medium]: {
        borderTopStyle: 'c',
      },
      [theme.breakpoints.small]: {
        borderTopStyle: 'd',
      },
    });
  });
});
