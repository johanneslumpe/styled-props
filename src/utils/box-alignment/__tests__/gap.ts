import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { gap } from '../gap';

describe('gap', () => {
  it('should return a function', () => {
    const result = gap();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `gap` as component and css prop', () => {
    const result = gap()({ gap: 'inherit' });
    expect(result).toEqual({ gap: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = gap<'a'>()({ gap: 'a' });
    expect(result).toEqual({ gap: 'a' });
  });

  it('should allow using a theme', () => {
    const result = gap<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ gap: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      gap: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = gap<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      gap: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      gap: 'a',
      [theme.breakpoints.large]: {
        gap: 'b',
      },
      [theme.breakpoints.medium]: {
        gap: 'c',
      },
      [theme.breakpoints.small]: {
        gap: 'd',
      },
    });
  });
});
