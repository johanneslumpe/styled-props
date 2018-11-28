import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { hyphens } from '../hyphens';

describe('hyphens', () => {
  it('should return a function', () => {
    const result = hyphens();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `hyphens` as component and css prop', () => {
    const result = hyphens()({ hyphens: 'inherit' });
    expect(result).toEqual({ hyphens: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = hyphens<'a'>()({ hyphens: 'a' });
    expect(result).toEqual({ hyphens: 'a' });
  });

  it('should use an interface which marks `hyphens` as optional', () => {
    const result = hyphens<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = hyphens<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ hyphens: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      hyphens: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = hyphens<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      hyphens: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      hyphens: 'a',
      [theme.breakpoints.large]: {
        hyphens: 'b',
      },
      [theme.breakpoints.medium]: {
        hyphens: 'c',
      },
      [theme.breakpoints.small]: {
        hyphens: 'd',
      },
    });
  });
});
