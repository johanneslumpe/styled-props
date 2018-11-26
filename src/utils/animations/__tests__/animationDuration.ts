import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { animationDuration } from '../animationDuration';

describe('animationDuration', () => {
  it('should return a function', () => {
    const result = animationDuration();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `animationDuration` as component and css prop', () => {
    const result = animationDuration()({ animationDuration: 'inherit' });
    expect(result).toEqual({ animationDuration: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = animationDuration<'a'>()({ animationDuration: 'a' });
    expect(result).toEqual({ animationDuration: 'a' });
  });

  it('should allow using a theme', () => {
    const result = animationDuration<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ animationDuration: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      animationDuration: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = animationDuration<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      animationDuration: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      animationDuration: 'a',
      [theme.breakpoints.large]: {
        animationDuration: 'b',
      },
      [theme.breakpoints.medium]: {
        animationDuration: 'c',
      },
      [theme.breakpoints.small]: {
        animationDuration: 'd',
      },
    });
  });
});
