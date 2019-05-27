import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { gridAutoRows } from '../gridAutoRows';

describe('gridAutoRows', () => {
  it('should return a function', () => {
    const result = gridAutoRows();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `gridAutoRows` as component and css prop', () => {
    const result = gridAutoRows()({ style$GridAutoRows: 'inherit' });
    expect(result).toEqual({ gridAutoRows: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = gridAutoRows<'a'>()({ style$GridAutoRows: 'a' });
    expect(result).toEqual({ gridAutoRows: 'a' });
  });

  it('should use an interface which marks `gridAutoRows` as optional', () => {
    const result = gridAutoRows<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = gridAutoRows<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$GridAutoRows: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      gridAutoRows: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = gridAutoRows<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$GridAutoRows: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      gridAutoRows: 'a',
      [theme.breakpoints.large]: {
        gridAutoRows: 'b',
      },
      [theme.breakpoints.medium]: {
        gridAutoRows: 'c',
      },
      [theme.breakpoints.small]: {
        gridAutoRows: 'd',
      },
    });
  });
});
