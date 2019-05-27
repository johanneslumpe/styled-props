import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { flexWrap } from '../flexWrap';

describe('flexWrap', () => {
  it('should return a function', () => {
    const result = flexWrap();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `flexWrap` as component and css prop', () => {
    const result = flexWrap()({ style$FlexWrap: 'inherit' });
    expect(result).toEqual({ flexWrap: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = flexWrap<'a'>()({ style$FlexWrap: 'a' });
    expect(result).toEqual({ flexWrap: 'a' });
  });

  it('should use an interface which marks `flexWrap` as optional', () => {
    const result = flexWrap<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = flexWrap<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$FlexWrap: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      flexWrap: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = flexWrap<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$FlexWrap: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      flexWrap: 'a',
      [theme.breakpoints.large]: {
        flexWrap: 'b',
      },
      [theme.breakpoints.medium]: {
        flexWrap: 'c',
      },
      [theme.breakpoints.small]: {
        flexWrap: 'd',
      },
    });
  });
});
