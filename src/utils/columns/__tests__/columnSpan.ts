import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { columnSpan } from '../columnSpan';

describe('columnSpan', () => {
  it('should return a function', () => {
    const result = columnSpan();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `columnSpan` as component and css prop', () => {
    const result = columnSpan()({ style$ColumnSpan: 'inherit' });
    expect(result).toEqual({ columnSpan: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = columnSpan<'a'>()({ style$ColumnSpan: 'a' });
    expect(result).toEqual({ columnSpan: 'a' });
  });

  it('should use an interface which marks `columnSpan` as optional', () => {
    const result = columnSpan<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = columnSpan<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$ColumnSpan: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      columnSpan: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = columnSpan<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$ColumnSpan: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      columnSpan: 'a',
      [theme.breakpoints.large]: {
        columnSpan: 'b',
      },
      [theme.breakpoints.medium]: {
        columnSpan: 'c',
      },
      [theme.breakpoints.small]: {
        columnSpan: 'd',
      },
    });
  });
});
