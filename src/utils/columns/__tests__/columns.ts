import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { columns } from '../columns';

describe('columns', () => {
  it('should return a function', () => {
    const result = columns();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `columns` as component and css prop', () => {
    const result = columns()({ style$Columns: 'inherit' });
    expect(result).toEqual({ columns: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = columns<'a'>()({ style$Columns: 'a' });
    expect(result).toEqual({ columns: 'a' });
  });

  it('should use an interface which marks `columns` as optional', () => {
    const result = columns<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = columns<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$Columns: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      columns: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = columns<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$Columns: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      columns: 'a',
      [theme.breakpoints.large]: {
        columns: 'b',
      },
      [theme.breakpoints.medium]: {
        columns: 'c',
      },
      [theme.breakpoints.small]: {
        columns: 'd',
      },
    });
  });
});
