import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { direction } from '../direction';

describe('direction', () => {
  it('should return a function', () => {
    const result = direction();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `direction` as component and css prop', () => {
    const result = direction()({ style$Direction: 'inherit' });
    expect(result).toEqual({ direction: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = direction<'a'>()({ style$Direction: 'a' });
    expect(result).toEqual({ direction: 'a' });
  });

  it('should use an interface which marks `direction` as optional', () => {
    const result = direction<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = direction<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$Direction: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      direction: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = direction<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$Direction: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      direction: 'a',
      [theme.breakpoints.large]: {
        direction: 'b',
      },
      [theme.breakpoints.medium]: {
        direction: 'c',
      },
      [theme.breakpoints.small]: {
        direction: 'd',
      },
    });
  });
});
