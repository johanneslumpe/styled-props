import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { flexGrow } from '../flexGrow';

describe('flexGrow', () => {
  it('should return a function', () => {
    const result = flexGrow();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `flexGrow` as component and css prop', () => {
    const result = flexGrow()({ style$FlexGrow: 'inherit' });
    expect(result).toEqual({ flexGrow: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = flexGrow<'a'>()({ style$FlexGrow: 'a' });
    expect(result).toEqual({ flexGrow: 'a' });
  });

  it('should use an interface which marks `flexGrow` as optional', () => {
    const result = flexGrow<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = flexGrow<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$FlexGrow: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      flexGrow: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = flexGrow<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$FlexGrow: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      flexGrow: 'a',
      [theme.breakpoints.large]: {
        flexGrow: 'b',
      },
      [theme.breakpoints.medium]: {
        flexGrow: 'c',
      },
      [theme.breakpoints.small]: {
        flexGrow: 'd',
      },
    });
  });
});
