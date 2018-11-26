import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { columnRuleColor } from '../columnRuleColor';

describe('columnRuleColor', () => {
  it('should return a function', () => {
    const result = columnRuleColor();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `columnRuleColor` as component and css prop', () => {
    const result = columnRuleColor()({ columnRuleColor: 'inherit' });
    expect(result).toEqual({ columnRuleColor: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = columnRuleColor<'a'>()({ columnRuleColor: 'a' });
    expect(result).toEqual({ columnRuleColor: 'a' });
  });

  it('should allow using a theme', () => {
    const result = columnRuleColor<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ columnRuleColor: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      columnRuleColor: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = columnRuleColor<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      columnRuleColor: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      columnRuleColor: 'a',
      [theme.breakpoints.large]: {
        columnRuleColor: 'b',
      },
      [theme.breakpoints.medium]: {
        columnRuleColor: 'c',
      },
      [theme.breakpoints.small]: {
        columnRuleColor: 'd',
      },
    });
  });
});
