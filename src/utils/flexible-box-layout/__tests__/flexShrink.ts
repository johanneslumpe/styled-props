import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { flexShrink } from '../flexShrink';

describe('flexShrink', () => {
  it('should return a function', () => {
    const result = flexShrink();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `flexShrink` as component and css prop', () => {
    const result = flexShrink()({ style$FlexShrink: 'inherit' });
    expect(result).toEqual({ flexShrink: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = flexShrink<'a'>()({ style$FlexShrink: 'a' });
    expect(result).toEqual({ flexShrink: 'a' });
  });

  it('should use an interface which marks `flexShrink` as optional', () => {
    const result = flexShrink<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = flexShrink<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$FlexShrink: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      flexShrink: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = flexShrink<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$FlexShrink: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      flexShrink: 'a',
      [theme.breakpoints.large]: {
        flexShrink: 'b',
      },
      [theme.breakpoints.medium]: {
        flexShrink: 'c',
      },
      [theme.breakpoints.small]: {
        flexShrink: 'd',
      },
    });
  });
});
