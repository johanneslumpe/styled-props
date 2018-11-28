import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { scale } from '../scale';

describe('scale', () => {
  it('should return a function', () => {
    const result = scale();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `scale` as component and css prop', () => {
    const result = scale()({ scale: 'inherit' });
    expect(result).toEqual({ scale: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = scale<'a'>()({ scale: 'a' });
    expect(result).toEqual({ scale: 'a' });
  });

  it('should use an interface which marks `scale` as optional', () => {
    const result = scale<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = scale<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ scale: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      scale: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = scale<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      scale: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      scale: 'a',
      [theme.breakpoints.large]: {
        scale: 'b',
      },
      [theme.breakpoints.medium]: {
        scale: 'c',
      },
      [theme.breakpoints.small]: {
        scale: 'd',
      },
    });
  });
});
