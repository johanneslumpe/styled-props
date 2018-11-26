import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { tableLayout } from '../tableLayout';

describe('tableLayout', () => {
  it('should return a function', () => {
    const result = tableLayout();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `tableLayout` as component and css prop', () => {
    const result = tableLayout()({ tableLayout: 'inherit' });
    expect(result).toEqual({ tableLayout: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = tableLayout<'a'>()({ tableLayout: 'a' });
    expect(result).toEqual({ tableLayout: 'a' });
  });

  it('should allow using a theme', () => {
    const result = tableLayout<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ tableLayout: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      tableLayout: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = tableLayout<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      tableLayout: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      tableLayout: 'a',
      [theme.breakpoints.large]: {
        tableLayout: 'b',
      },
      [theme.breakpoints.medium]: {
        tableLayout: 'c',
      },
      [theme.breakpoints.small]: {
        tableLayout: 'd',
      },
    });
  });
});
