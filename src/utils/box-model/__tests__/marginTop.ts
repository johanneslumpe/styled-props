import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { marginTop } from '../marginTop';

describe('marginTop', () => {
  it('should return a function', () => {
    const result = marginTop();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `marginTop` as component and css prop', () => {
    const result = marginTop()({ marginTop: 'inherit' });
    expect(result).toEqual({ marginTop: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = marginTop<'a'>()({ marginTop: 'a' });
    expect(result).toEqual({ marginTop: 'a' });
  });

  it('should use an interface which marks `marginTop` as optional', () => {
    const result = marginTop<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = marginTop<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ marginTop: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      marginTop: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = marginTop<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      marginTop: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      marginTop: 'a',
      [theme.breakpoints.large]: {
        marginTop: 'b',
      },
      [theme.breakpoints.medium]: {
        marginTop: 'c',
      },
      [theme.breakpoints.small]: {
        marginTop: 'd',
      },
    });
  });
});
