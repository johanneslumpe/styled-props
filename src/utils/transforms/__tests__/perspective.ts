import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { perspective } from '../perspective';

describe('perspective', () => {
  it('should return a function', () => {
    const result = perspective();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `perspective` as component and css prop', () => {
    const result = perspective()({ style$Perspective: 'inherit' });
    expect(result).toEqual({ perspective: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = perspective<'a'>()({ style$Perspective: 'a' });
    expect(result).toEqual({ perspective: 'a' });
  });

  it('should use an interface which marks `perspective` as optional', () => {
    const result = perspective<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = perspective<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$Perspective: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      perspective: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = perspective<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$Perspective: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      perspective: 'a',
      [theme.breakpoints.large]: {
        perspective: 'b',
      },
      [theme.breakpoints.medium]: {
        perspective: 'c',
      },
      [theme.breakpoints.small]: {
        perspective: 'd',
      },
    });
  });
});
