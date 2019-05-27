import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { columnWidth } from '../columnWidth';

describe('columnWidth', () => {
  it('should return a function', () => {
    const result = columnWidth();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `columnWidth` as component and css prop', () => {
    const result = columnWidth()({ style$ColumnWidth: 'inherit' });
    expect(result).toEqual({ columnWidth: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = columnWidth<'a'>()({ style$ColumnWidth: 'a' });
    expect(result).toEqual({ columnWidth: 'a' });
  });

  it('should use an interface which marks `columnWidth` as optional', () => {
    const result = columnWidth<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = columnWidth<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$ColumnWidth: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      columnWidth: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = columnWidth<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$ColumnWidth: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      columnWidth: 'a',
      [theme.breakpoints.large]: {
        columnWidth: 'b',
      },
      [theme.breakpoints.medium]: {
        columnWidth: 'c',
      },
      [theme.breakpoints.small]: {
        columnWidth: 'd',
      },
    });
  });
});
