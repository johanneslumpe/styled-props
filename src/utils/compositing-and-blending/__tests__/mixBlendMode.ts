import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { mixBlendMode } from '../mixBlendMode';

describe('mixBlendMode', () => {
  it('should return a function', () => {
    const result = mixBlendMode();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `mixBlendMode` as component and css prop', () => {
    const result = mixBlendMode()({ mixBlendMode: 'inherit' });
    expect(result).toEqual({ mixBlendMode: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = mixBlendMode<'a'>()({ mixBlendMode: 'a' });
    expect(result).toEqual({ mixBlendMode: 'a' });
  });

  it('should allow using a theme', () => {
    const result = mixBlendMode<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ mixBlendMode: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      mixBlendMode: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = mixBlendMode<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      mixBlendMode: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      mixBlendMode: 'a',
      [theme.breakpoints.large]: {
        mixBlendMode: 'b',
      },
      [theme.breakpoints.medium]: {
        mixBlendMode: 'c',
      },
      [theme.breakpoints.small]: {
        mixBlendMode: 'd',
      },
    });
  });
});
