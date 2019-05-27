import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { gridTemplateRows } from '../gridTemplateRows';

describe('gridTemplateRows', () => {
  it('should return a function', () => {
    const result = gridTemplateRows();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `gridTemplateRows` as component and css prop', () => {
    const result = gridTemplateRows()({ style$GridTemplateRows: 'inherit' });
    expect(result).toEqual({ gridTemplateRows: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = gridTemplateRows<'a'>()({ style$GridTemplateRows: 'a' });
    expect(result).toEqual({ gridTemplateRows: 'a' });
  });

  it('should use an interface which marks `gridTemplateRows` as optional', () => {
    const result = gridTemplateRows<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = gridTemplateRows<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$GridTemplateRows: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      gridTemplateRows: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = gridTemplateRows<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$GridTemplateRows: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      gridTemplateRows: 'a',
      [theme.breakpoints.large]: {
        gridTemplateRows: 'b',
      },
      [theme.breakpoints.medium]: {
        gridTemplateRows: 'c',
      },
      [theme.breakpoints.small]: {
        gridTemplateRows: 'd',
      },
    });
  });
});
