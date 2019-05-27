import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { counterIncrement } from '../counterIncrement';

describe('counterIncrement', () => {
  it('should return a function', () => {
    const result = counterIncrement();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `counterIncrement` as component and css prop', () => {
    const result = counterIncrement()({ style$CounterIncrement: 'inherit' });
    expect(result).toEqual({ counterIncrement: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = counterIncrement<'a'>()({ style$CounterIncrement: 'a' });
    expect(result).toEqual({ counterIncrement: 'a' });
  });

  it('should use an interface which marks `counterIncrement` as optional', () => {
    const result = counterIncrement<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = counterIncrement<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$CounterIncrement: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      counterIncrement: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = counterIncrement<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$CounterIncrement: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      counterIncrement: 'a',
      [theme.breakpoints.large]: {
        counterIncrement: 'b',
      },
      [theme.breakpoints.medium]: {
        counterIncrement: 'c',
      },
      [theme.breakpoints.small]: {
        counterIncrement: 'd',
      },
    });
  });
});
