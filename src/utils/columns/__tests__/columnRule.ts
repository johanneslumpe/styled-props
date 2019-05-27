import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { columnRule } from '../columnRule';

describe('columnRule', () => {
  it('should return a function', () => {
    const result = columnRule();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `columnRule` as component and css prop', () => {
    const result = columnRule()({ style$ColumnRule: 'inherit' });
    expect(result).toEqual({ columnRule: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = columnRule<'a'>()({ style$ColumnRule: 'a' });
    expect(result).toEqual({ columnRule: 'a' });
  });

  it('should use an interface which marks `columnRule` as optional', () => {
    const result = columnRule<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = columnRule<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$ColumnRule: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      columnRule: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = columnRule<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$ColumnRule: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      columnRule: 'a',
      [theme.breakpoints.large]: {
        columnRule: 'b',
      },
      [theme.breakpoints.medium]: {
        columnRule: 'c',
      },
      [theme.breakpoints.small]: {
        columnRule: 'd',
      },
    });
  });
});
