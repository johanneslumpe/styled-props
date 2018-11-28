import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { columnRuleStyle } from '../columnRuleStyle';

describe('columnRuleStyle', () => {
  it('should return a function', () => {
    const result = columnRuleStyle();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `columnRuleStyle` as component and css prop', () => {
    const result = columnRuleStyle()({ columnRuleStyle: 'inherit' });
    expect(result).toEqual({ columnRuleStyle: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = columnRuleStyle<'a'>()({ columnRuleStyle: 'a' });
    expect(result).toEqual({ columnRuleStyle: 'a' });
  });

  it('should use an interface which marks `columnRuleStyle` as optional', () => {
    const result = columnRuleStyle<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = columnRuleStyle<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ columnRuleStyle: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      columnRuleStyle: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = columnRuleStyle<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      columnRuleStyle: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      columnRuleStyle: 'a',
      [theme.breakpoints.large]: {
        columnRuleStyle: 'b',
      },
      [theme.breakpoints.medium]: {
        columnRuleStyle: 'c',
      },
      [theme.breakpoints.small]: {
        columnRuleStyle: 'd',
      },
    });
  });
});
