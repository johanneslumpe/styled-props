import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { gridAutoColumns } from '../gridAutoColumns';

describe('gridAutoColumns', () => {
  it('should return a function', () => {
    const result = gridAutoColumns();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `gridAutoColumns` as component and css prop', () => {
    const result = gridAutoColumns()({ gridAutoColumns: 'inherit' });
    expect(result).toEqual({ gridAutoColumns: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = gridAutoColumns<'a'>()({ gridAutoColumns: 'a' });
    expect(result).toEqual({ gridAutoColumns: 'a' });
  });

  it('should allow using a theme', () => {
    const result = gridAutoColumns<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ gridAutoColumns: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      gridAutoColumns: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = gridAutoColumns<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      gridAutoColumns: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      gridAutoColumns: 'a',
      [theme.breakpoints.large]: {
        gridAutoColumns: 'b',
      },
      [theme.breakpoints.medium]: {
        gridAutoColumns: 'c',
      },
      [theme.breakpoints.small]: {
        gridAutoColumns: 'd',
      },
    });
  });
});
