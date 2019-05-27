import {
  Breakpoints,
  Theme,
  theme,
  ThemeWithoutBreakpoints,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { borderImageRepeat } from '../borderImageRepeat';

describe('borderImageRepeat', () => {
  it('should return a function', () => {
    const result = borderImageRepeat();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `borderImageRepeat` as component and css prop', () => {
    const result = borderImageRepeat()({ style$BorderImageRepeat: 'inherit' });
    expect(result).toEqual({ borderImageRepeat: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderImageRepeat<'a'>()({ style$BorderImageRepeat: 'a' });
    expect(result).toEqual({ borderImageRepeat: 'a' });
  });

  it('should use an interface which marks `borderImageRepeat` as optional', () => {
    const result = borderImageRepeat<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = borderImageRepeat<'value', ThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ style$BorderImageRepeat: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      borderImageRepeat: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderImageRepeat<
      'a' | 'b' | 'c' | 'd',
      Theme,
      Breakpoints
    >()({
      style$BorderImageRepeat: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      borderImageRepeat: 'a',
      [theme.breakpoints.large]: {
        borderImageRepeat: 'b',
      },
      [theme.breakpoints.medium]: {
        borderImageRepeat: 'c',
      },
      [theme.breakpoints.small]: {
        borderImageRepeat: 'd',
      },
    });
  });
});
