import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { gridColumn } from '../gridColumn';

describe('gridColumn', () => {
  it('should return a function', () => {
    const result = gridColumn();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `gridColumn` as component and css prop', () => {
    const result = gridColumn()({ gridColumn: 'inherit' });
    expect(result).toEqual({ gridColumn: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = gridColumn<'a'>()({ gridColumn: 'a' });
    expect(result).toEqual({ gridColumn: 'a' });
  });

  it('should allow using a theme', () => {
    const result = gridColumn<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ gridColumn: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      gridColumn: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = gridColumn<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      gridColumn: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      gridColumn: 'a',
      [theme.breakpoints.large]: {
        gridColumn: 'b',
      },
      [theme.breakpoints.medium]: {
        gridColumn: 'c',
      },
      [theme.breakpoints.small]: {
        gridColumn: 'd',
      },
    });
  });
});
