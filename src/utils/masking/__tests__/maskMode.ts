import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { maskMode } from '../maskMode';

describe('maskMode', () => {
  it('should return a function', () => {
    const result = maskMode();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `maskMode` as component and css prop', () => {
    const result = maskMode()({ maskMode: 'inherit' });
    expect(result).toEqual({ maskMode: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = maskMode<'a'>()({ maskMode: 'a' });
    expect(result).toEqual({ maskMode: 'a' });
  });

  it('should use an interface which marks `maskMode` as optional', () => {
    const result = maskMode<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = maskMode<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ maskMode: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      maskMode: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = maskMode<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      maskMode: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      maskMode: 'a',
      [theme.breakpoints.large]: {
        maskMode: 'b',
      },
      [theme.breakpoints.medium]: {
        maskMode: 'c',
      },
      [theme.breakpoints.small]: {
        maskMode: 'd',
      },
    });
  });
});
