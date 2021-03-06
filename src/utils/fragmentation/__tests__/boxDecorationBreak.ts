import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { boxDecorationBreak } from '../boxDecorationBreak';

describe('boxDecorationBreak', () => {
  it('should return a function', () => {
    const result = boxDecorationBreak();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `boxDecorationBreak` as component and css prop', () => {
    const result = boxDecorationBreak()({ style$BoxDecorationBreak: 'inherit' });
    expect(result).toEqual({ boxDecorationBreak: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = boxDecorationBreak<'a'>()({ style$BoxDecorationBreak: 'a' });
    expect(result).toEqual({ boxDecorationBreak: 'a' });
  });

  it('should use an interface which marks `boxDecorationBreak` as optional', () => {
    const result = boxDecorationBreak<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = boxDecorationBreak<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$BoxDecorationBreak: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      boxDecorationBreak: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = boxDecorationBreak<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$BoxDecorationBreak: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      boxDecorationBreak: 'a',
      [theme.breakpoints.large]: {
        boxDecorationBreak: 'b',
      },
      [theme.breakpoints.medium]: {
        boxDecorationBreak: 'c',
      },
      [theme.breakpoints.small]: {
        boxDecorationBreak: 'd',
      },
    });
  });
});
