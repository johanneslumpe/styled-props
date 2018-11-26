import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { animationTimingFunction } from '../animationTimingFunction';

describe('animationTimingFunction', () => {
  it('should return a function', () => {
    const result = animationTimingFunction();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `animationTimingFunction` as component and css prop', () => {
    const result = animationTimingFunction()({ animationTimingFunction: 'inherit' });
    expect(result).toEqual({ animationTimingFunction: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = animationTimingFunction<'a'>()({ animationTimingFunction: 'a' });
    expect(result).toEqual({ animationTimingFunction: 'a' });
  });

  it('should allow using a theme', () => {
    const result = animationTimingFunction<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ animationTimingFunction: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      animationTimingFunction: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = animationTimingFunction<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      animationTimingFunction: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      animationTimingFunction: 'a',
      [theme.breakpoints.large]: {
        animationTimingFunction: 'b',
      },
      [theme.breakpoints.medium]: {
        animationTimingFunction: 'c',
      },
      [theme.breakpoints.small]: {
        animationTimingFunction: 'd',
      },
    });
  });
});
