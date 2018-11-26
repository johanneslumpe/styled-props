import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { fontSynthesis } from '../fontSynthesis';

describe('fontSynthesis', () => {
  it('should return a function', () => {
    const result = fontSynthesis();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `fontSynthesis` as component and css prop', () => {
    const result = fontSynthesis()({ fontSynthesis: 'inherit' });
    expect(result).toEqual({ fontSynthesis: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = fontSynthesis<'a'>()({ fontSynthesis: 'a' });
    expect(result).toEqual({ fontSynthesis: 'a' });
  });

  it('should allow using a theme', () => {
    const result = fontSynthesis<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ fontSynthesis: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      fontSynthesis: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = fontSynthesis<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      fontSynthesis: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      fontSynthesis: 'a',
      [theme.breakpoints.large]: {
        fontSynthesis: 'b',
      },
      [theme.breakpoints.medium]: {
        fontSynthesis: 'c',
      },
      [theme.breakpoints.small]: {
        fontSynthesis: 'd',
      },
    });
  });
});
