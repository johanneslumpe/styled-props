import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { minBlockSize } from '../minBlockSize';

describe('minBlockSize', () => {
  it('should return a function', () => {
    const result = minBlockSize();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `minBlockSize` as component and css prop', () => {
    const result = minBlockSize()({ style$MinBlockSize: 'inherit' });
    expect(result).toEqual({ minBlockSize: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = minBlockSize<'a'>()({ style$MinBlockSize: 'a' });
    expect(result).toEqual({ minBlockSize: 'a' });
  });

  it('should use an interface which marks `minBlockSize` as optional', () => {
    const result = minBlockSize<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = minBlockSize<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$MinBlockSize: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      minBlockSize: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = minBlockSize<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$MinBlockSize: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      minBlockSize: 'a',
      [theme.breakpoints.large]: {
        minBlockSize: 'b',
      },
      [theme.breakpoints.medium]: {
        minBlockSize: 'c',
      },
      [theme.breakpoints.small]: {
        minBlockSize: 'd',
      },
    });
  });
});
