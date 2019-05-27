import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { listStyleType } from '../listStyleType';

describe('listStyleType', () => {
  it('should return a function', () => {
    const result = listStyleType();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `listStyleType` as component and css prop', () => {
    const result = listStyleType()({ style$ListStyleType: 'inherit' });
    expect(result).toEqual({ listStyleType: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = listStyleType<'a'>()({ style$ListStyleType: 'a' });
    expect(result).toEqual({ listStyleType: 'a' });
  });

  it('should use an interface which marks `listStyleType` as optional', () => {
    const result = listStyleType<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = listStyleType<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$ListStyleType: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      listStyleType: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = listStyleType<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$ListStyleType: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      listStyleType: 'a',
      [theme.breakpoints.large]: {
        listStyleType: 'b',
      },
      [theme.breakpoints.medium]: {
        listStyleType: 'c',
      },
      [theme.breakpoints.small]: {
        listStyleType: 'd',
      },
    });
  });
});
