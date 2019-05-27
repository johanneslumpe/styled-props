import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { backgroundColor } from '../backgroundColor';

describe('backgroundColor', () => {
  it('should return a function', () => {
    const result = backgroundColor();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `backgroundColor` as component and css prop', () => {
    const result = backgroundColor()({ style$BackgroundColor: 'inherit' });
    expect(result).toEqual({ backgroundColor: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = backgroundColor<'a'>()({ style$BackgroundColor: 'a' });
    expect(result).toEqual({ backgroundColor: 'a' });
  });

  it('should use an interface which marks `backgroundColor` as optional', () => {
    const result = backgroundColor<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = backgroundColor<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$BackgroundColor: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      backgroundColor: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = backgroundColor<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$BackgroundColor: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      backgroundColor: 'a',
      [theme.breakpoints.large]: {
        backgroundColor: 'b',
      },
      [theme.breakpoints.medium]: {
        backgroundColor: 'c',
      },
      [theme.breakpoints.small]: {
        backgroundColor: 'd',
      },
    });
  });
});
