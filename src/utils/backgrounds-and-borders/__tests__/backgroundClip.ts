import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { backgroundClip } from '../backgroundClip';

describe('backgroundClip', () => {
  it('should return a function', () => {
    const result = backgroundClip();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `backgroundClip` as component and css prop', () => {
    const result = backgroundClip()({ backgroundClip: 'inherit' });
    expect(result).toEqual({ backgroundClip: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = backgroundClip<'a'>()({ backgroundClip: 'a' });
    expect(result).toEqual({ backgroundClip: 'a' });
  });

  it('should allow using a theme', () => {
    const result = backgroundClip<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ backgroundClip: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      backgroundClip: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = backgroundClip<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      backgroundClip: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      backgroundClip: 'a',
      [theme.breakpoints.large]: {
        backgroundClip: 'b',
      },
      [theme.breakpoints.medium]: {
        backgroundClip: 'c',
      },
      [theme.breakpoints.small]: {
        backgroundClip: 'd',
      },
    });
  });
});
