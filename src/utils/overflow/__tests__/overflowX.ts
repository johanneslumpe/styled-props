import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { overflowX } from '../overflowX';

describe('overflowX', () => {
  it('should return a function', () => {
    const result = overflowX();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `overflowX` as component and css prop', () => {
    const result = overflowX()({ overflowX: 'inherit' });
    expect(result).toEqual({ overflowX: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = overflowX<'a'>()({ overflowX: 'a' });
    expect(result).toEqual({ overflowX: 'a' });
  });

  it('should allow using a theme', () => {
    const result = overflowX<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ overflowX: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      overflowX: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = overflowX<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      overflowX: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      overflowX: 'a',
      [theme.breakpoints.large]: {
        overflowX: 'b',
      },
      [theme.breakpoints.medium]: {
        overflowX: 'c',
      },
      [theme.breakpoints.small]: {
        overflowX: 'd',
      },
    });
  });
});
