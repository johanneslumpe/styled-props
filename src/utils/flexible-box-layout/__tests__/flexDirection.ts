import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { flexDirection } from '../flexDirection';

describe('flexDirection', () => {
  it('should return a function', () => {
    const result = flexDirection();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `flexDirection` as component and css prop', () => {
    const result = flexDirection()({ style$FlexDirection: 'inherit' });
    expect(result).toEqual({ flexDirection: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = flexDirection<'a'>()({ style$FlexDirection: 'a' });
    expect(result).toEqual({ flexDirection: 'a' });
  });

  it('should use an interface which marks `flexDirection` as optional', () => {
    const result = flexDirection<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = flexDirection<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$FlexDirection: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      flexDirection: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = flexDirection<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$FlexDirection: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      flexDirection: 'a',
      [theme.breakpoints.large]: {
        flexDirection: 'b',
      },
      [theme.breakpoints.medium]: {
        flexDirection: 'c',
      },
      [theme.breakpoints.small]: {
        flexDirection: 'd',
      },
    });
  });
});
