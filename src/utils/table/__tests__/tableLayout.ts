import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { tableLayout } from '../tableLayout';

describe('tableLayout', () => {
  it('should return a function', () => {
    const result = tableLayout();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `tableLayout` as component and css prop', () => {
    const result = tableLayout()({ style$TableLayout: 'inherit' });
    expect(result).toEqual({ tableLayout: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = tableLayout<'a'>()({ style$TableLayout: 'a' });
    expect(result).toEqual({ tableLayout: 'a' });
  });

  it('should use an interface which marks `tableLayout` as optional', () => {
    const result = tableLayout<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = tableLayout<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$TableLayout: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      tableLayout: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = tableLayout<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$TableLayout: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      tableLayout: 'a',
      [theme.breakpoints.large]: {
        tableLayout: 'b',
      },
      [theme.breakpoints.medium]: {
        tableLayout: 'c',
      },
      [theme.breakpoints.small]: {
        tableLayout: 'd',
      },
    });
  });
});
