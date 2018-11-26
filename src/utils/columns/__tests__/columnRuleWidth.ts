import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { columnRuleWidth } from '../columnRuleWidth';

describe('columnRuleWidth', () => {
  it('should return a function', () => {
    const result = columnRuleWidth();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `columnRuleWidth` as component and css prop', () => {
    const result = columnRuleWidth()({ columnRuleWidth: 'inherit' });
    expect(result).toEqual({ columnRuleWidth: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = columnRuleWidth<'a'>()({ columnRuleWidth: 'a' });
    expect(result).toEqual({ columnRuleWidth: 'a' });
  });

  it('should allow using a theme', () => {
    const result = columnRuleWidth<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ columnRuleWidth: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      columnRuleWidth: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = columnRuleWidth<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      columnRuleWidth: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      columnRuleWidth: 'a',
      [theme.breakpoints.large]: {
        columnRuleWidth: 'b',
      },
      [theme.breakpoints.medium]: {
        columnRuleWidth: 'c',
      },
      [theme.breakpoints.small]: {
        columnRuleWidth: 'd',
      },
    });
  });
});
