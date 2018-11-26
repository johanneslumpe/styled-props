import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { fontSize } from '../fontSize';

describe('fontSize', () => {
  it('should return a function', () => {
    const result = fontSize();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `fontSize` as component and css prop', () => {
    const result = fontSize()({ fontSize: 'inherit' });
    expect(result).toEqual({ fontSize: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = fontSize<'a'>()({ fontSize: 'a' });
    expect(result).toEqual({ fontSize: 'a' });
  });

  it('should allow using a theme', () => {
    const result = fontSize<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ fontSize: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      fontSize: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = fontSize<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      fontSize: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      fontSize: 'a',
      [theme.breakpoints.large]: {
        fontSize: 'b',
      },
      [theme.breakpoints.medium]: {
        fontSize: 'c',
      },
      [theme.breakpoints.small]: {
        fontSize: 'd',
      },
    });
  });
});
