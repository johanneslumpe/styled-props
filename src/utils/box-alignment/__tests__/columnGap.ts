import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { columnGap } from '../columnGap';

describe('columnGap', () => {
  it('should return a function', () => {
    const result = columnGap();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `columnGap` as component and css prop', () => {
    const result = columnGap()({ style$ColumnGap: 'inherit' });
    expect(result).toEqual({ columnGap: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = columnGap<'a'>()({ style$ColumnGap: 'a' });
    expect(result).toEqual({ columnGap: 'a' });
  });

  it('should use an interface which marks `columnGap` as optional', () => {
    const result = columnGap<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = columnGap<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$ColumnGap: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      columnGap: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = columnGap<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$ColumnGap: {
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
