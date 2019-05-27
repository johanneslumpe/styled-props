import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { gridAutoColumns } from '../gridAutoColumns';

describe('gridAutoColumns', () => {
  it('should return a function', () => {
    const result = gridAutoColumns();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `gridAutoColumns` as component and css prop', () => {
    const result = gridAutoColumns()({ style$GridAutoColumns: 'inherit' });
    expect(result).toEqual({ gridAutoColumns: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = gridAutoColumns<'a'>()({ style$GridAutoColumns: 'a' });
    expect(result).toEqual({ gridAutoColumns: 'a' });
  });

  it('should use an interface which marks `gridAutoColumns` as optional', () => {
    const result = gridAutoColumns<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = gridAutoColumns<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$GridAutoColumns: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      gridAutoColumns: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = gridAutoColumns<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$GridAutoColumns: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      gridAutoColumns: 'a',
      [theme.breakpoints.large]: {
        gridAutoColumns: 'b',
      },
      [theme.breakpoints.medium]: {
        gridAutoColumns: 'c',
      },
      [theme.breakpoints.small]: {
        gridAutoColumns: 'd',
      },
    });
  });
});
