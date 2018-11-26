import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { animationDelay } from '../animationDelay';

describe('animationDelay', () => {
  it('should return a function', () => {
    const result = animationDelay();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `animationDelay` as component and css prop', () => {
    const result = animationDelay()({ animationDelay: 'inherit' });
    expect(result).toEqual({ animationDelay: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = animationDelay<'a'>()({ animationDelay: 'a' });
    expect(result).toEqual({ animationDelay: 'a' });
  });

  it('should allow using a theme', () => {
    const result = animationDelay<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ animationDelay: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      animationDelay: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = animationDelay<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      animationDelay: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      animationDelay: 'a',
      [theme.breakpoints.large]: {
        animationDelay: 'b',
      },
      [theme.breakpoints.medium]: {
        animationDelay: 'c',
      },
      [theme.breakpoints.small]: {
        animationDelay: 'd',
      },
    });
  });
});
