import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { maskClip } from '../maskClip';

describe('maskClip', () => {
  it('should return a function', () => {
    const result = maskClip();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `maskClip` as component and css prop', () => {
    const result = maskClip()({ maskClip: 'inherit' });
    expect(result).toEqual({ maskClip: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = maskClip<'a'>()({ maskClip: 'a' });
    expect(result).toEqual({ maskClip: 'a' });
  });

  it('should use an interface which marks `maskClip` as optional', () => {
    const result = maskClip<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = maskClip<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ maskClip: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      maskClip: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = maskClip<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      maskClip: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      maskClip: 'a',
      [theme.breakpoints.large]: {
        maskClip: 'b',
      },
      [theme.breakpoints.medium]: {
        maskClip: 'c',
      },
      [theme.breakpoints.small]: {
        maskClip: 'd',
      },
    });
  });
});
