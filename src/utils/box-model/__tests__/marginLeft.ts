import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { marginLeft } from '../marginLeft';

describe('marginLeft', () => {
  it('should return a function', () => {
    const result = marginLeft();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `marginLeft` as component and css prop', () => {
    const result = marginLeft()({ marginLeft: 'inherit' });
    expect(result).toEqual({ marginLeft: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = marginLeft<'a'>()({ marginLeft: 'a' });
    expect(result).toEqual({ marginLeft: 'a' });
  });

  it('should allow using a theme', () => {
    const result = marginLeft<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ marginLeft: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      marginLeft: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = marginLeft<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      marginLeft: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      marginLeft: 'a',
      [theme.breakpoints.large]: {
        marginLeft: 'b',
      },
      [theme.breakpoints.medium]: {
        marginLeft: 'c',
      },
      [theme.breakpoints.small]: {
        marginLeft: 'd',
      },
    });
  });
});
