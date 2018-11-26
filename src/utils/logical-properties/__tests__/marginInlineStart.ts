import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { marginInlineStart } from '../marginInlineStart';

describe('marginInlineStart', () => {
  it('should return a function', () => {
    const result = marginInlineStart();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `marginInlineStart` as component and css prop', () => {
    const result = marginInlineStart()({ marginInlineStart: 'inherit' });
    expect(result).toEqual({ marginInlineStart: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = marginInlineStart<'a'>()({ marginInlineStart: 'a' });
    expect(result).toEqual({ marginInlineStart: 'a' });
  });

  it('should allow using a theme', () => {
    const result = marginInlineStart<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ marginInlineStart: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      marginInlineStart: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = marginInlineStart<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      marginInlineStart: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      marginInlineStart: 'a',
      [theme.breakpoints.large]: {
        marginInlineStart: 'b',
      },
      [theme.breakpoints.medium]: {
        marginInlineStart: 'c',
      },
      [theme.breakpoints.small]: {
        marginInlineStart: 'd',
      },
    });
  });
});
