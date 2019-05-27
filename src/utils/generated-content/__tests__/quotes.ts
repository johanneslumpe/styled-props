import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { quotes } from '../quotes';

describe('quotes', () => {
  it('should return a function', () => {
    const result = quotes();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `quotes` as component and css prop', () => {
    const result = quotes()({ style$Quotes: 'inherit' });
    expect(result).toEqual({ quotes: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = quotes<'a'>()({ style$Quotes: 'a' });
    expect(result).toEqual({ quotes: 'a' });
  });

  it('should use an interface which marks `quotes` as optional', () => {
    const result = quotes<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = quotes<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$Quotes: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      quotes: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = quotes<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$Quotes: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      quotes: 'a',
      [theme.breakpoints.large]: {
        quotes: 'b',
      },
      [theme.breakpoints.medium]: {
        quotes: 'c',
      },
      [theme.breakpoints.small]: {
        quotes: 'd',
      },
    });
  });
});
