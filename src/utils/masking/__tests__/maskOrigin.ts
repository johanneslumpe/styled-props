import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { maskOrigin } from '../maskOrigin';

describe('maskOrigin', () => {
  it('should return a function', () => {
    const result = maskOrigin();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `maskOrigin` as component and css prop', () => {
    const result = maskOrigin()({ maskOrigin: 'inherit' });
    expect(result).toEqual({ maskOrigin: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = maskOrigin<'a'>()({ maskOrigin: 'a' });
    expect(result).toEqual({ maskOrigin: 'a' });
  });

  it('should allow using a theme', () => {
    const result = maskOrigin<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ maskOrigin: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      maskOrigin: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = maskOrigin<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      maskOrigin: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      maskOrigin: 'a',
      [theme.breakpoints.large]: {
        maskOrigin: 'b',
      },
      [theme.breakpoints.medium]: {
        maskOrigin: 'c',
      },
      [theme.breakpoints.small]: {
        maskOrigin: 'd',
      },
    });
  });
});
