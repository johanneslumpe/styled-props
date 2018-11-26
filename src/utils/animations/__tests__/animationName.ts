import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { animationName } from '../animationName';

describe('animationName', () => {
  it('should return a function', () => {
    const result = animationName();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `animationName` as component and css prop', () => {
    const result = animationName()({ animationName: 'inherit' });
    expect(result).toEqual({ animationName: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = animationName<'a'>()({ animationName: 'a' });
    expect(result).toEqual({ animationName: 'a' });
  });

  it('should allow using a theme', () => {
    const result = animationName<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ animationName: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      animationName: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = animationName<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      animationName: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      animationName: 'a',
      [theme.breakpoints.large]: {
        animationName: 'b',
      },
      [theme.breakpoints.medium]: {
        animationName: 'c',
      },
      [theme.breakpoints.small]: {
        animationName: 'd',
      },
    });
  });
});
