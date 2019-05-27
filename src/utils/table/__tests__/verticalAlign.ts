import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { verticalAlign } from '../verticalAlign';

describe('verticalAlign', () => {
  it('should return a function', () => {
    const result = verticalAlign();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `verticalAlign` as component and css prop', () => {
    const result = verticalAlign()({ style$VerticalAlign: 'inherit' });
    expect(result).toEqual({ verticalAlign: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = verticalAlign<'a'>()({ style$VerticalAlign: 'a' });
    expect(result).toEqual({ verticalAlign: 'a' });
  });

  it('should use an interface which marks `verticalAlign` as optional', () => {
    const result = verticalAlign<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = verticalAlign<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$VerticalAlign: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      verticalAlign: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = verticalAlign<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$VerticalAlign: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      verticalAlign: 'a',
      [theme.breakpoints.large]: {
        verticalAlign: 'b',
      },
      [theme.breakpoints.medium]: {
        verticalAlign: 'c',
      },
      [theme.breakpoints.small]: {
        verticalAlign: 'd',
      },
    });
  });
});
