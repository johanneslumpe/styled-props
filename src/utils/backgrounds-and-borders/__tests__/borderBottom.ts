import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { borderBottom } from '../borderBottom';

describe('borderBottom', () => {
  it('should return a function', () => {
    const result = borderBottom();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `borderBottom` as component and css prop', () => {
    const result = borderBottom()({ style$BorderBottom: 'inherit' });
    expect(result).toEqual({ borderBottom: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderBottom<'a'>()({ style$BorderBottom: 'a' });
    expect(result).toEqual({ borderBottom: 'a' });
  });

  it('should use an interface which marks `borderBottom` as optional', () => {
    const result = borderBottom<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = borderBottom<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$BorderBottom: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      borderBottom: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderBottom<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$BorderBottom: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      borderBottom: 'a',
      [theme.breakpoints.large]: {
        borderBottom: 'b',
      },
      [theme.breakpoints.medium]: {
        borderBottom: 'c',
      },
      [theme.breakpoints.small]: {
        borderBottom: 'd',
      },
    });
  });
});
