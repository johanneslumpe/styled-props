import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { gridColumn } from '../gridColumn';

describe('gridColumn', () => {
  it('should return a function', () => {
    const result = gridColumn();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `gridColumn` as component and css prop', () => {
    const result = gridColumn()({ style$GridColumn: 'inherit' });
    expect(result).toEqual({ gridColumn: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = gridColumn<'a'>()({ style$GridColumn: 'a' });
    expect(result).toEqual({ gridColumn: 'a' });
  });

  it('should use an interface which marks `gridColumn` as optional', () => {
    const result = gridColumn<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = gridColumn<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$GridColumn: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      gridColumn: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = gridColumn<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$GridColumn: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      gridColumn: 'a',
      [theme.breakpoints.large]: {
        gridColumn: 'b',
      },
      [theme.breakpoints.medium]: {
        gridColumn: 'c',
      },
      [theme.breakpoints.small]: {
        gridColumn: 'd',
      },
    });
  });
});
