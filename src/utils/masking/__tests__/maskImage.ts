import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { maskImage } from '../maskImage';

describe('maskImage', () => {
  it('should return a function', () => {
    const result = maskImage();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `maskImage` as component and css prop', () => {
    const result = maskImage()({ maskImage: 'inherit' });
    expect(result).toEqual({ maskImage: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = maskImage<'a'>()({ maskImage: 'a' });
    expect(result).toEqual({ maskImage: 'a' });
  });

  it('should use an interface which marks `maskImage` as optional', () => {
    const result = maskImage<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = maskImage<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ maskImage: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      maskImage: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = maskImage<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      maskImage: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      maskImage: 'a',
      [theme.breakpoints.large]: {
        maskImage: 'b',
      },
      [theme.breakpoints.medium]: {
        maskImage: 'c',
      },
      [theme.breakpoints.small]: {
        maskImage: 'd',
      },
    });
  });
});
