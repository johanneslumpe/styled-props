import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { opacity } from '../opacity';

describe('opacity', () => {
  it('should return a function', () => {
    const result = opacity();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `opacity` as component and css prop', () => {
    const result = opacity()({ opacity: 'inherit' });
    expect(result).toEqual({ opacity: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = opacity<'a'>()({ opacity: 'a' });
    expect(result).toEqual({ opacity: 'a' });
  });

  it('should use an interface which marks `opacity` as optional', () => {
    const result = opacity<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = opacity<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ opacity: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      opacity: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = opacity<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      opacity: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      opacity: 'a',
      [theme.breakpoints.large]: {
        opacity: 'b',
      },
      [theme.breakpoints.medium]: {
        opacity: 'c',
      },
      [theme.breakpoints.small]: {
        opacity: 'd',
      },
    });
  });
});
