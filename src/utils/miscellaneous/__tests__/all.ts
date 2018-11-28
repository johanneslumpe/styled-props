import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { all } from '../all';

describe('all', () => {
  it('should return a function', () => {
    const result = all();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `all` as component and css prop', () => {
    const result = all()({ all: 'inherit' });
    expect(result).toEqual({ all: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = all<'a'>()({ all: 'a' });
    expect(result).toEqual({ all: 'a' });
  });

  it('should use an interface which marks `all` as optional', () => {
    const result = all<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = all<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ all: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      all: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = all<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      all: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      all: 'a',
      [theme.breakpoints.large]: {
        all: 'b',
      },
      [theme.breakpoints.medium]: {
        all: 'c',
      },
      [theme.breakpoints.small]: {
        all: 'd',
      },
    });
  });
});
