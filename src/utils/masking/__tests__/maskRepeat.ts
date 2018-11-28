import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { maskRepeat } from '../maskRepeat';

describe('maskRepeat', () => {
  it('should return a function', () => {
    const result = maskRepeat();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `maskRepeat` as component and css prop', () => {
    const result = maskRepeat()({ maskRepeat: 'inherit' });
    expect(result).toEqual({ maskRepeat: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = maskRepeat<'a'>()({ maskRepeat: 'a' });
    expect(result).toEqual({ maskRepeat: 'a' });
  });

  it('should use an interface which marks `maskRepeat` as optional', () => {
    const result = maskRepeat<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = maskRepeat<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ maskRepeat: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      maskRepeat: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = maskRepeat<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      maskRepeat: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      maskRepeat: 'a',
      [theme.breakpoints.large]: {
        maskRepeat: 'b',
      },
      [theme.breakpoints.medium]: {
        maskRepeat: 'c',
      },
      [theme.breakpoints.small]: {
        maskRepeat: 'd',
      },
    });
  });
});
