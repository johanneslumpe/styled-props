import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { order } from '../order';

describe('order', () => {
  it('should return a function', () => {
    const result = order();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `order` as component and css prop', () => {
    const result = order()({ style$Order: 'inherit' });
    expect(result).toEqual({ order: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = order<'a'>()({ style$Order: 'a' });
    expect(result).toEqual({ order: 'a' });
  });

  it('should use an interface which marks `order` as optional', () => {
    const result = order<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = order<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$Order: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      order: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = order<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$Order: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      order: 'a',
      [theme.breakpoints.large]: {
        order: 'b',
      },
      [theme.breakpoints.medium]: {
        order: 'c',
      },
      [theme.breakpoints.small]: {
        order: 'd',
      },
    });
  });
});
