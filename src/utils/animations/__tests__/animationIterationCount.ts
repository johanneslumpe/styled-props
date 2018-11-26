import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { animationIterationCount } from '../animationIterationCount';

describe('animationIterationCount', () => {
  it('should return a function', () => {
    const result = animationIterationCount();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `animationIterationCount` as component and css prop', () => {
    const result = animationIterationCount()({ animationIterationCount: 'inherit' });
    expect(result).toEqual({ animationIterationCount: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = animationIterationCount<'a'>()({ animationIterationCount: 'a' });
    expect(result).toEqual({ animationIterationCount: 'a' });
  });

  it('should allow using a theme', () => {
    const result = animationIterationCount<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ animationIterationCount: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      animationIterationCount: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = animationIterationCount<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      animationIterationCount: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      animationIterationCount: 'a',
      [theme.breakpoints.large]: {
        animationIterationCount: 'b',
      },
      [theme.breakpoints.medium]: {
        animationIterationCount: 'c',
      },
      [theme.breakpoints.small]: {
        animationIterationCount: 'd',
      },
    });
  });
});
