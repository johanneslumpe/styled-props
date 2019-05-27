import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { scrollBehavior } from '../scrollBehavior';

describe('scrollBehavior', () => {
  it('should return a function', () => {
    const result = scrollBehavior();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `scrollBehavior` as component and css prop', () => {
    const result = scrollBehavior()({ style$ScrollBehavior: 'inherit' });
    expect(result).toEqual({ scrollBehavior: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = scrollBehavior<'a'>()({ style$ScrollBehavior: 'a' });
    expect(result).toEqual({ scrollBehavior: 'a' });
  });

  it('should use an interface which marks `scrollBehavior` as optional', () => {
    const result = scrollBehavior<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = scrollBehavior<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$ScrollBehavior: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      scrollBehavior: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = scrollBehavior<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$ScrollBehavior: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      scrollBehavior: 'a',
      [theme.breakpoints.large]: {
        scrollBehavior: 'b',
      },
      [theme.breakpoints.medium]: {
        scrollBehavior: 'c',
      },
      [theme.breakpoints.small]: {
        scrollBehavior: 'd',
      },
    });
  });
});
