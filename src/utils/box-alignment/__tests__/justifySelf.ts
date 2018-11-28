import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { justifySelf } from '../justifySelf';

describe('justifySelf', () => {
  it('should return a function', () => {
    const result = justifySelf();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `justifySelf` as component and css prop', () => {
    const result = justifySelf()({ justifySelf: 'inherit' });
    expect(result).toEqual({ justifySelf: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = justifySelf<'a'>()({ justifySelf: 'a' });
    expect(result).toEqual({ justifySelf: 'a' });
  });

  it('should use an interface which marks `justifySelf` as optional', () => {
    const result = justifySelf<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = justifySelf<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ justifySelf: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      justifySelf: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = justifySelf<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      justifySelf: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      justifySelf: 'a',
      [theme.breakpoints.large]: {
        justifySelf: 'b',
      },
      [theme.breakpoints.medium]: {
        justifySelf: 'c',
      },
      [theme.breakpoints.small]: {
        justifySelf: 'd',
      },
    });
  });
});
