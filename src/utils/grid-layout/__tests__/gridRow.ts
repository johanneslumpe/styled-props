import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { gridRow } from '../gridRow';

describe('gridRow', () => {
  it('should return a function', () => {
    const result = gridRow();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `gridRow` as component and css prop', () => {
    const result = gridRow()({ style$GridRow: 'inherit' });
    expect(result).toEqual({ gridRow: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = gridRow<'a'>()({ style$GridRow: 'a' });
    expect(result).toEqual({ gridRow: 'a' });
  });

  it('should use an interface which marks `gridRow` as optional', () => {
    const result = gridRow<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = gridRow<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$GridRow: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      gridRow: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = gridRow<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$GridRow: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      gridRow: 'a',
      [theme.breakpoints.large]: {
        gridRow: 'b',
      },
      [theme.breakpoints.medium]: {
        gridRow: 'c',
      },
      [theme.breakpoints.small]: {
        gridRow: 'd',
      },
    });
  });
});
