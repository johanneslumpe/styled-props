import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { animation } from '../animation';

describe('animation', () => {
  it('should return a function', () => {
    const result = animation();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `animation` as component and css prop', () => {
    const result = animation()({ style$Animation: 'inherit' });
    expect(result).toEqual({ animation: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = animation<'a'>()({ style$Animation: 'a' });
    expect(result).toEqual({ animation: 'a' });
  });

  it('should use an interface which marks `animation` as optional', () => {
    const result = animation<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = animation<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$Animation: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      animation: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = animation<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$Animation: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      animation: 'a',
      [theme.breakpoints.large]: {
        animation: 'b',
      },
      [theme.breakpoints.medium]: {
        animation: 'c',
      },
      [theme.breakpoints.small]: {
        animation: 'd',
      },
    });
  });
});
