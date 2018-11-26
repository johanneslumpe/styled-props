import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { scrollSnapType } from '../scrollSnapType';

describe('scrollSnapType', () => {
  it('should return a function', () => {
    const result = scrollSnapType();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `scrollSnapType` as component and css prop', () => {
    const result = scrollSnapType()({ scrollSnapType: 'inherit' });
    expect(result).toEqual({ scrollSnapType: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = scrollSnapType<'a'>()({ scrollSnapType: 'a' });
    expect(result).toEqual({ scrollSnapType: 'a' });
  });

  it('should allow using a theme', () => {
    const result = scrollSnapType<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ scrollSnapType: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      scrollSnapType: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = scrollSnapType<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      scrollSnapType: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      scrollSnapType: 'a',
      [theme.breakpoints.large]: {
        scrollSnapType: 'b',
      },
      [theme.breakpoints.medium]: {
        scrollSnapType: 'c',
      },
      [theme.breakpoints.small]: {
        scrollSnapType: 'd',
      },
    });
  });
});
