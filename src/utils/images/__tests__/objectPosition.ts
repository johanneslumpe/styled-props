import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { objectPosition } from '../objectPosition';

describe('objectPosition', () => {
  it('should return a function', () => {
    const result = objectPosition();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `objectPosition` as component and css prop', () => {
    const result = objectPosition()({ style$ObjectPosition: 'inherit' });
    expect(result).toEqual({ objectPosition: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = objectPosition<'a'>()({ style$ObjectPosition: 'a' });
    expect(result).toEqual({ objectPosition: 'a' });
  });

  it('should use an interface which marks `objectPosition` as optional', () => {
    const result = objectPosition<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = objectPosition<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$ObjectPosition: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      objectPosition: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = objectPosition<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$ObjectPosition: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      objectPosition: 'a',
      [theme.breakpoints.large]: {
        objectPosition: 'b',
      },
      [theme.breakpoints.medium]: {
        objectPosition: 'c',
      },
      [theme.breakpoints.small]: {
        objectPosition: 'd',
      },
    });
  });
});
