import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { zIndex } from '../zIndex';

describe('zIndex', () => {
  it('should return a function', () => {
    const result = zIndex();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `zIndex` as component and css prop', () => {
    const result = zIndex()({ style$ZIndex: 'inherit' });
    expect(result).toEqual({ zIndex: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = zIndex<'a'>()({ style$ZIndex: 'a' });
    expect(result).toEqual({ zIndex: 'a' });
  });

  it('should use an interface which marks `zIndex` as optional', () => {
    const result = zIndex<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = zIndex<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$ZIndex: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      zIndex: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = zIndex<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$ZIndex: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      zIndex: 'a',
      [theme.breakpoints.large]: {
        zIndex: 'b',
      },
      [theme.breakpoints.medium]: {
        zIndex: 'c',
      },
      [theme.breakpoints.small]: {
        zIndex: 'd',
      },
    });
  });
});
