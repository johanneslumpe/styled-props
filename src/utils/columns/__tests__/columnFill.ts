import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { columnFill } from '../columnFill';

describe('columnFill', () => {
  it('should return a function', () => {
    const result = columnFill();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `columnFill` as component and css prop', () => {
    const result = columnFill()({ style$ColumnFill: 'inherit' });
    expect(result).toEqual({ columnFill: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = columnFill<'a'>()({ style$ColumnFill: 'a' });
    expect(result).toEqual({ columnFill: 'a' });
  });

  it('should use an interface which marks `columnFill` as optional', () => {
    const result = columnFill<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = columnFill<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$ColumnFill: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      columnFill: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = columnFill<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$ColumnFill: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      columnFill: 'a',
      [theme.breakpoints.large]: {
        columnFill: 'b',
      },
      [theme.breakpoints.medium]: {
        columnFill: 'c',
      },
      [theme.breakpoints.small]: {
        columnFill: 'd',
      },
    });
  });
});
