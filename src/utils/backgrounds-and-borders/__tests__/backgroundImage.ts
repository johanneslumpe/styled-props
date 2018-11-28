import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { backgroundImage } from '../backgroundImage';

describe('backgroundImage', () => {
  it('should return a function', () => {
    const result = backgroundImage();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `backgroundImage` as component and css prop', () => {
    const result = backgroundImage()({ backgroundImage: 'inherit' });
    expect(result).toEqual({ backgroundImage: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = backgroundImage<'a'>()({ backgroundImage: 'a' });
    expect(result).toEqual({ backgroundImage: 'a' });
  });

  it('should use an interface which marks `backgroundImage` as optional', () => {
    const result = backgroundImage<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = backgroundImage<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ backgroundImage: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      backgroundImage: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = backgroundImage<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      backgroundImage: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      backgroundImage: 'a',
      [theme.breakpoints.large]: {
        backgroundImage: 'b',
      },
      [theme.breakpoints.medium]: {
        backgroundImage: 'c',
      },
      [theme.breakpoints.small]: {
        backgroundImage: 'd',
      },
    });
  });
});
