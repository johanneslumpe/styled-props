import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { gridTemplateRows } from '../gridTemplateRows';

describe('gridTemplateRows', () => {
  it('should return a function', () => {
    const result = gridTemplateRows();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `gridTemplateRows` as component and css prop', () => {
    const result = gridTemplateRows()({ gridTemplateRows: 'inherit' });
    expect(result).toEqual({ gridTemplateRows: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = gridTemplateRows<'a'>()({ gridTemplateRows: 'a' });
    expect(result).toEqual({ gridTemplateRows: 'a' });
  });

  it('should allow using a theme', () => {
    const result = gridTemplateRows<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ gridTemplateRows: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      gridTemplateRows: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = gridTemplateRows<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      gridTemplateRows: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      gridTemplateRows: 'a',
      [theme.breakpoints.large]: {
        gridTemplateRows: 'b',
      },
      [theme.breakpoints.medium]: {
        gridTemplateRows: 'c',
      },
      [theme.breakpoints.small]: {
        gridTemplateRows: 'd',
      },
    });
  });
});
