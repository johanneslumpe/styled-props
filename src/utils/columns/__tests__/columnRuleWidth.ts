import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { columnRuleWidth } from '../columnRuleWidth';

describe('columnRuleWidth', () => {
  it('should return a function', () => {
    const result = columnRuleWidth();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `columnRuleWidth` as component and css prop', () => {
    const result = columnRuleWidth()({ style$ColumnRuleWidth: 'inherit' });
    expect(result).toEqual({ columnRuleWidth: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = columnRuleWidth<'a'>()({ style$ColumnRuleWidth: 'a' });
    expect(result).toEqual({ columnRuleWidth: 'a' });
  });

  it('should use an interface which marks `columnRuleWidth` as optional', () => {
    const result = columnRuleWidth<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = columnRuleWidth<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$ColumnRuleWidth: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      columnRuleWidth: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = columnRuleWidth<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$ColumnRuleWidth: {
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
