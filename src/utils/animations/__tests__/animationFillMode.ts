import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { animationFillMode } from '../animationFillMode';

describe('animationFillMode', () => {
  it('should return a function', () => {
    const result = animationFillMode();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `animationFillMode` as component and css prop', () => {
    const result = animationFillMode()({ animationFillMode: 'inherit' });
    expect(result).toEqual({ animationFillMode: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = animationFillMode<'a'>()({ animationFillMode: 'a' });
    expect(result).toEqual({ animationFillMode: 'a' });
  });

  it('should allow using a theme', () => {
    const result = animationFillMode<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ animationFillMode: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      animationFillMode: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = animationFillMode<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      animationFillMode: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      animationFillMode: 'a',
      [theme.breakpoints.large]: {
        animationFillMode: 'b',
      },
      [theme.breakpoints.medium]: {
        animationFillMode: 'c',
      },
      [theme.breakpoints.small]: {
        animationFillMode: 'd',
      },
    });
  });
});
