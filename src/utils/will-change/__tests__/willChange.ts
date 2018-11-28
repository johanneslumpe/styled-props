import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { willChange } from '../willChange';

describe('willChange', () => {
  it('should return a function', () => {
    const result = willChange();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `willChange` as component and css prop', () => {
    const result = willChange()({ willChange: 'inherit' });
    expect(result).toEqual({ willChange: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = willChange<'a'>()({ willChange: 'a' });
    expect(result).toEqual({ willChange: 'a' });
  });

  it('should use an interface which marks `willChange` as optional', () => {
    const result = willChange<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = willChange<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ willChange: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      willChange: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = willChange<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      willChange: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      willChange: 'a',
      [theme.breakpoints.large]: {
        willChange: 'b',
      },
      [theme.breakpoints.medium]: {
        willChange: 'c',
      },
      [theme.breakpoints.small]: {
        willChange: 'd',
      },
    });
  });
});
