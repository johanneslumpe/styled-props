import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { hangingPunctuation } from '../hangingPunctuation';

describe('hangingPunctuation', () => {
  it('should return a function', () => {
    const result = hangingPunctuation();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `hangingPunctuation` as component and css prop', () => {
    const result = hangingPunctuation()({ hangingPunctuation: 'inherit' });
    expect(result).toEqual({ hangingPunctuation: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = hangingPunctuation<'a'>()({ hangingPunctuation: 'a' });
    expect(result).toEqual({ hangingPunctuation: 'a' });
  });

  it('should allow using a theme', () => {
    const result = hangingPunctuation<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ hangingPunctuation: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      hangingPunctuation: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = hangingPunctuation<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      hangingPunctuation: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      hangingPunctuation: 'a',
      [theme.breakpoints.large]: {
        hangingPunctuation: 'b',
      },
      [theme.breakpoints.medium]: {
        hangingPunctuation: 'c',
      },
      [theme.breakpoints.small]: {
        hangingPunctuation: 'd',
      },
    });
  });
});
