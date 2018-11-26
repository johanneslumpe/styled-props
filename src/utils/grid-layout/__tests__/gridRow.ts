import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { gridRow } from '../gridRow';

describe('gridRow', () => {
  it('should return a function', () => {
    const result = gridRow();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `gridRow` as component and css prop', () => {
    const result = gridRow()({ gridRow: 'inherit' });
    expect(result).toEqual({ gridRow: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = gridRow<'a'>()({ gridRow: 'a' });
    expect(result).toEqual({ gridRow: 'a' });
  });

  it('should allow using a theme', () => {
    const result = gridRow<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ gridRow: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      gridRow: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = gridRow<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      gridRow: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      gridRow: 'a',
      [theme.breakpoints.large]: {
        gridRow: 'b',
      },
      [theme.breakpoints.medium]: {
        gridRow: 'c',
      },
      [theme.breakpoints.small]: {
        gridRow: 'd',
      },
    });
  });
});
