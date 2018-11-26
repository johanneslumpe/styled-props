import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { transformOrigin } from '../transformOrigin';

describe('transformOrigin', () => {
  it('should return a function', () => {
    const result = transformOrigin();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `transformOrigin` as component and css prop', () => {
    const result = transformOrigin()({ transformOrigin: 'inherit' });
    expect(result).toEqual({ transformOrigin: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = transformOrigin<'a'>()({ transformOrigin: 'a' });
    expect(result).toEqual({ transformOrigin: 'a' });
  });

  it('should allow using a theme', () => {
    const result = transformOrigin<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ transformOrigin: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      transformOrigin: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = transformOrigin<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      transformOrigin: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      transformOrigin: 'a',
      [theme.breakpoints.large]: {
        transformOrigin: 'b',
      },
      [theme.breakpoints.medium]: {
        transformOrigin: 'c',
      },
      [theme.breakpoints.small]: {
        transformOrigin: 'd',
      },
    });
  });
});
