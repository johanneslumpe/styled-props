import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { perspectiveOrigin } from '../perspectiveOrigin';

describe('perspectiveOrigin', () => {
  it('should return a function', () => {
    const result = perspectiveOrigin();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `perspectiveOrigin` as component and css prop', () => {
    const result = perspectiveOrigin()({ perspectiveOrigin: 'inherit' });
    expect(result).toEqual({ perspectiveOrigin: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = perspectiveOrigin<'a'>()({ perspectiveOrigin: 'a' });
    expect(result).toEqual({ perspectiveOrigin: 'a' });
  });

  it('should allow using a theme', () => {
    const result = perspectiveOrigin<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ perspectiveOrigin: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      perspectiveOrigin: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = perspectiveOrigin<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      perspectiveOrigin: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      perspectiveOrigin: 'a',
      [theme.breakpoints.large]: {
        perspectiveOrigin: 'b',
      },
      [theme.breakpoints.medium]: {
        perspectiveOrigin: 'c',
      },
      [theme.breakpoints.small]: {
        perspectiveOrigin: 'd',
      },
    });
  });
});
