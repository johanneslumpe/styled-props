import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { transition } from '../transition';

describe('transition', () => {
  it('should return a function', () => {
    const result = transition();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `transition` as component and css prop', () => {
    const result = transition()({ transition: 'inherit' });
    expect(result).toEqual({ transition: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = transition<'a'>()({ transition: 'a' });
    expect(result).toEqual({ transition: 'a' });
  });

  it('should allow using a theme', () => {
    const result = transition<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ transition: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      transition: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = transition<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      transition: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      transition: 'a',
      [theme.breakpoints.large]: {
        transition: 'b',
      },
      [theme.breakpoints.medium]: {
        transition: 'c',
      },
      [theme.breakpoints.small]: {
        transition: 'd',
      },
    });
  });
});