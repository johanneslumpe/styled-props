import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { transform } from '../transform';

describe('transform', () => {
  it('should return a function', () => {
    const result = transform();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `transform` as component and css prop', () => {
    const result = transform()({ style$Transform: 'inherit' });
    expect(result).toEqual({ transform: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = transform<'a'>()({ style$Transform: 'a' });
    expect(result).toEqual({ transform: 'a' });
  });

  it('should use an interface which marks `transform` as optional', () => {
    const result = transform<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = transform<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$Transform: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      transform: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = transform<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$Transform: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      transform: 'a',
      [theme.breakpoints.large]: {
        transform: 'b',
      },
      [theme.breakpoints.medium]: {
        transform: 'c',
      },
      [theme.breakpoints.small]: {
        transform: 'd',
      },
    });
  });
});
