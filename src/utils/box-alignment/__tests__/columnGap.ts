import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { columnGap } from '../columnGap';

describe('columnGap', () => {
  it('should return a function', () => {
    const result = columnGap();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `columnGap` as component and css prop', () => {
    const result = columnGap()({ columnGap: 'inherit' });
    expect(result).toEqual({ columnGap: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = columnGap<'a'>()({ columnGap: 'a' });
    expect(result).toEqual({ columnGap: 'a' });
  });

  it('should allow using a theme', () => {
    const result = columnGap<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ columnGap: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      columnGap: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = columnGap<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      columnGap: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      columnGap: 'a',
      [theme.breakpoints.large]: {
        columnGap: 'b',
      },
      [theme.breakpoints.medium]: {
        columnGap: 'c',
      },
      [theme.breakpoints.small]: {
        columnGap: 'd',
      },
    });
  });
});
