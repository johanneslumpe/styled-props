import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { lineBreak } from '../lineBreak';

describe('lineBreak', () => {
  it('should return a function', () => {
    const result = lineBreak();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `lineBreak` as component and css prop', () => {
    const result = lineBreak()({ style$LineBreak: 'inherit' });
    expect(result).toEqual({ lineBreak: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = lineBreak<'a'>()({ style$LineBreak: 'a' });
    expect(result).toEqual({ lineBreak: 'a' });
  });

  it('should use an interface which marks `lineBreak` as optional', () => {
    const result = lineBreak<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = lineBreak<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$LineBreak: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      lineBreak: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = lineBreak<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$LineBreak: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      lineBreak: 'a',
      [theme.breakpoints.large]: {
        lineBreak: 'b',
      },
      [theme.breakpoints.medium]: {
        lineBreak: 'c',
      },
      [theme.breakpoints.small]: {
        lineBreak: 'd',
      },
    });
  });
});
