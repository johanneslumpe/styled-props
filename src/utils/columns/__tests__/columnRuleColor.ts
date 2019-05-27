import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { columnRuleColor } from '../columnRuleColor';

describe('columnRuleColor', () => {
  it('should return a function', () => {
    const result = columnRuleColor();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `columnRuleColor` as component and css prop', () => {
    const result = columnRuleColor()({ style$ColumnRuleColor: 'inherit' });
    expect(result).toEqual({ columnRuleColor: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = columnRuleColor<'a'>()({ style$ColumnRuleColor: 'a' });
    expect(result).toEqual({ columnRuleColor: 'a' });
  });

  it('should use an interface which marks `columnRuleColor` as optional', () => {
    const result = columnRuleColor<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = columnRuleColor<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$ColumnRuleColor: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      columnRuleColor: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = columnRuleColor<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$ColumnRuleColor: {
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
