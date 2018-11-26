import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { grid } from '../grid';

describe('grid', () => {
  it('should return a function', () => {
    const result = grid();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `grid` as component and css prop', () => {
    const result = grid()({ grid: 'inherit' });
    expect(result).toEqual({ grid: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = grid<'a'>()({ grid: 'a' });
    expect(result).toEqual({ grid: 'a' });
  });

  it('should allow using a theme', () => {
    const result = grid<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ grid: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      grid: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = grid<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      grid: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      grid: 'a',
      [theme.breakpoints.large]: {
        grid: 'b',
      },
      [theme.breakpoints.medium]: {
        grid: 'c',
      },
      [theme.breakpoints.small]: {
        grid: 'd',
      },
    });
  });
});
