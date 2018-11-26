import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { marginInlineEnd } from '../marginInlineEnd';

describe('marginInlineEnd', () => {
  it('should return a function', () => {
    const result = marginInlineEnd();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `marginInlineEnd` as component and css prop', () => {
    const result = marginInlineEnd()({ marginInlineEnd: 'inherit' });
    expect(result).toEqual({ marginInlineEnd: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = marginInlineEnd<'a'>()({ marginInlineEnd: 'a' });
    expect(result).toEqual({ marginInlineEnd: 'a' });
  });

  it('should allow using a theme', () => {
    const result = marginInlineEnd<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ marginInlineEnd: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      marginInlineEnd: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = marginInlineEnd<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      marginInlineEnd: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      marginInlineEnd: 'a',
      [theme.breakpoints.large]: {
        marginInlineEnd: 'b',
      },
      [theme.breakpoints.medium]: {
        marginInlineEnd: 'c',
      },
      [theme.breakpoints.small]: {
        marginInlineEnd: 'd',
      },
    });
  });
});
