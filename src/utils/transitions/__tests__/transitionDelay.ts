import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { transitionDelay } from '../transitionDelay';

describe('transitionDelay', () => {
  it('should return a function', () => {
    const result = transitionDelay();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `transitionDelay` as component and css prop', () => {
    const result = transitionDelay()({ transitionDelay: 'inherit' });
    expect(result).toEqual({ transitionDelay: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = transitionDelay<'a'>()({ transitionDelay: 'a' });
    expect(result).toEqual({ transitionDelay: 'a' });
  });

  it('should use an interface which marks `transitionDelay` as optional', () => {
    const result = transitionDelay<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = transitionDelay<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ transitionDelay: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      transitionDelay: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = transitionDelay<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      transitionDelay: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      transitionDelay: 'a',
      [theme.breakpoints.large]: {
        transitionDelay: 'b',
      },
      [theme.breakpoints.medium]: {
        transitionDelay: 'c',
      },
      [theme.breakpoints.small]: {
        transitionDelay: 'd',
      },
    });
  });
});
