import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { columnCount } from '../columnCount';

describe('columnCount', () => {
  it('should return a function', () => {
    const result = columnCount();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `columnCount` as component and css prop', () => {
    const result = columnCount()({ style$ColumnCount: 'inherit' });
    expect(result).toEqual({ columnCount: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = columnCount<'a'>()({ style$ColumnCount: 'a' });
    expect(result).toEqual({ columnCount: 'a' });
  });

  it('should use an interface which marks `columnCount` as optional', () => {
    const result = columnCount<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = columnCount<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$ColumnCount: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      columnCount: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = columnCount<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$ColumnCount: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      columnCount: 'a',
      [theme.breakpoints.large]: {
        columnCount: 'b',
      },
      [theme.breakpoints.medium]: {
        columnCount: 'c',
      },
      [theme.breakpoints.small]: {
        columnCount: 'd',
      },
    });
  });
});
