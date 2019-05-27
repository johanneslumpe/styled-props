import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { gridRowEnd } from '../gridRowEnd';

describe('gridRowEnd', () => {
  it('should return a function', () => {
    const result = gridRowEnd();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `gridRowEnd` as component and css prop', () => {
    const result = gridRowEnd()({ style$GridRowEnd: 'inherit' });
    expect(result).toEqual({ gridRowEnd: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = gridRowEnd<'a'>()({ style$GridRowEnd: 'a' });
    expect(result).toEqual({ gridRowEnd: 'a' });
  });

  it('should use an interface which marks `gridRowEnd` as optional', () => {
    const result = gridRowEnd<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = gridRowEnd<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$GridRowEnd: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      gridRowEnd: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = gridRowEnd<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$GridRowEnd: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      gridRowEnd: 'a',
      [theme.breakpoints.large]: {
        gridRowEnd: 'b',
      },
      [theme.breakpoints.medium]: {
        gridRowEnd: 'c',
      },
      [theme.breakpoints.small]: {
        gridRowEnd: 'd',
      },
    });
  });
});
