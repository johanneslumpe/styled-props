import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { maskType } from '../maskType';

describe('maskType', () => {
  it('should return a function', () => {
    const result = maskType();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `maskType` as component and css prop', () => {
    const result = maskType()({ maskType: 'inherit' });
    expect(result).toEqual({ maskType: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = maskType<'a'>()({ maskType: 'a' });
    expect(result).toEqual({ maskType: 'a' });
  });

  it('should use an interface which marks `maskType` as optional', () => {
    const result = maskType<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = maskType<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ maskType: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      maskType: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = maskType<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      maskType: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      maskType: 'a',
      [theme.breakpoints.large]: {
        maskType: 'b',
      },
      [theme.breakpoints.medium]: {
        maskType: 'c',
      },
      [theme.breakpoints.small]: {
        maskType: 'd',
      },
    });
  });
});
