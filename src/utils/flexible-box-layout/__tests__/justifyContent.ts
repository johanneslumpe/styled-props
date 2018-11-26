import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { justifyContent } from '../justifyContent';

describe('justifyContent', () => {
  it('should return a function', () => {
    const result = justifyContent();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `justifyContent` as component and css prop', () => {
    const result = justifyContent()({ justifyContent: 'inherit' });
    expect(result).toEqual({ justifyContent: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = justifyContent<'a'>()({ justifyContent: 'a' });
    expect(result).toEqual({ justifyContent: 'a' });
  });

  it('should allow using a theme', () => {
    const result = justifyContent<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ justifyContent: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      justifyContent: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = justifyContent<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      justifyContent: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      justifyContent: 'a',
      [theme.breakpoints.large]: {
        justifyContent: 'b',
      },
      [theme.breakpoints.medium]: {
        justifyContent: 'c',
      },
      [theme.breakpoints.small]: {
        justifyContent: 'd',
      },
    });
  });
});
