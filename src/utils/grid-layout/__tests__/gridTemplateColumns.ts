import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { gridTemplateColumns } from '../gridTemplateColumns';

describe('gridTemplateColumns', () => {
  it('should return a function', () => {
    const result = gridTemplateColumns();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `gridTemplateColumns` as component and css prop', () => {
    const result = gridTemplateColumns()({ gridTemplateColumns: 'inherit' });
    expect(result).toEqual({ gridTemplateColumns: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = gridTemplateColumns<'a'>()({ gridTemplateColumns: 'a' });
    expect(result).toEqual({ gridTemplateColumns: 'a' });
  });

  it('should use an interface which marks `gridTemplateColumns` as optional', () => {
    const result = gridTemplateColumns<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = gridTemplateColumns<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ gridTemplateColumns: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      gridTemplateColumns: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = gridTemplateColumns<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      gridTemplateColumns: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      gridTemplateColumns: 'a',
      [theme.breakpoints.large]: {
        gridTemplateColumns: 'b',
      },
      [theme.breakpoints.medium]: {
        gridTemplateColumns: 'c',
      },
      [theme.breakpoints.small]: {
        gridTemplateColumns: 'd',
      },
    });
  });
});
