import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { borderRight } from '../borderRight';

describe('borderRight', () => {
  it('should return a function', () => {
    const result = borderRight();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `borderRight` as component and css prop', () => {
    const result = borderRight()({ style$BorderRight: 'inherit' });
    expect(result).toEqual({ borderRight: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderRight<'a'>()({ style$BorderRight: 'a' });
    expect(result).toEqual({ borderRight: 'a' });
  });

  it('should use an interface which marks `borderRight` as optional', () => {
    const result = borderRight<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = borderRight<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$BorderRight: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      borderRight: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderRight<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$BorderRight: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      borderRight: 'a',
      [theme.breakpoints.large]: {
        borderRight: 'b',
      },
      [theme.breakpoints.medium]: {
        borderRight: 'c',
      },
      [theme.breakpoints.small]: {
        borderRight: 'd',
      },
    });
  });
});
