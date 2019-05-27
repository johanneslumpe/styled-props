import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { mask } from '../mask';

describe('mask', () => {
  it('should return a function', () => {
    const result = mask();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `mask` as component and css prop', () => {
    const result = mask()({ style$Mask: 'inherit' });
    expect(result).toEqual({ mask: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = mask<'a'>()({ style$Mask: 'a' });
    expect(result).toEqual({ mask: 'a' });
  });

  it('should use an interface which marks `mask` as optional', () => {
    const result = mask<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = mask<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$Mask: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      mask: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = mask<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$Mask: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      mask: 'a',
      [theme.breakpoints.large]: {
        mask: 'b',
      },
      [theme.breakpoints.medium]: {
        mask: 'c',
      },
      [theme.breakpoints.small]: {
        mask: 'd',
      },
    });
  });
});
