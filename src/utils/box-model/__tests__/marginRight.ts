import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { marginRight } from '../marginRight';

describe('marginRight', () => {
  it('should return a function', () => {
    const result = marginRight();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `marginRight` as component and css prop', () => {
    const result = marginRight()({ marginRight: 'inherit' });
    expect(result).toEqual({ marginRight: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = marginRight<'a'>()({ marginRight: 'a' });
    expect(result).toEqual({ marginRight: 'a' });
  });

  it('should allow using a theme', () => {
    const result = marginRight<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ marginRight: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      marginRight: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = marginRight<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      marginRight: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      marginRight: 'a',
      [theme.breakpoints.large]: {
        marginRight: 'b',
      },
      [theme.breakpoints.medium]: {
        marginRight: 'c',
      },
      [theme.breakpoints.small]: {
        marginRight: 'd',
      },
    });
  });
});
