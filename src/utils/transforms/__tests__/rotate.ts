import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { rotate } from '../rotate';

describe('rotate', () => {
  it('should return a function', () => {
    const result = rotate();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `rotate` as component and css prop', () => {
    const result = rotate()({ rotate: 'inherit' });
    expect(result).toEqual({ rotate: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = rotate<'a'>()({ rotate: 'a' });
    expect(result).toEqual({ rotate: 'a' });
  });

  it('should use an interface which marks `rotate` as optional', () => {
    const result = rotate<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = rotate<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ rotate: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      rotate: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = rotate<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      rotate: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      rotate: 'a',
      [theme.breakpoints.large]: {
        rotate: 'b',
      },
      [theme.breakpoints.medium]: {
        rotate: 'c',
      },
      [theme.breakpoints.small]: {
        rotate: 'd',
      },
    });
  });
});
