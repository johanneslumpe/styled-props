import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { transitionDuration } from '../transitionDuration';

describe('transitionDuration', () => {
  it('should return a function', () => {
    const result = transitionDuration();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `transitionDuration` as component and css prop', () => {
    const result = transitionDuration()({ transitionDuration: 'inherit' });
    expect(result).toEqual({ transitionDuration: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = transitionDuration<'a'>()({ transitionDuration: 'a' });
    expect(result).toEqual({ transitionDuration: 'a' });
  });

  it('should allow using a theme', () => {
    const result = transitionDuration<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ transitionDuration: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      transitionDuration: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = transitionDuration<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      transitionDuration: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      transitionDuration: 'a',
      [theme.breakpoints.large]: {
        transitionDuration: 'b',
      },
      [theme.breakpoints.medium]: {
        transitionDuration: 'c',
      },
      [theme.breakpoints.small]: {
        transitionDuration: 'd',
      },
    });
  });
});
