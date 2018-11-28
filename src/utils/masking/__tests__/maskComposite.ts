import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { maskComposite } from '../maskComposite';

describe('maskComposite', () => {
  it('should return a function', () => {
    const result = maskComposite();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `maskComposite` as component and css prop', () => {
    const result = maskComposite()({ maskComposite: 'inherit' });
    expect(result).toEqual({ maskComposite: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = maskComposite<'a'>()({ maskComposite: 'a' });
    expect(result).toEqual({ maskComposite: 'a' });
  });

  it('should use an interface which marks `maskComposite` as optional', () => {
    const result = maskComposite<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = maskComposite<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ maskComposite: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      maskComposite: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = maskComposite<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      maskComposite: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      maskComposite: 'a',
      [theme.breakpoints.large]: {
        maskComposite: 'b',
      },
      [theme.breakpoints.medium]: {
        maskComposite: 'c',
      },
      [theme.breakpoints.small]: {
        maskComposite: 'd',
      },
    });
  });
});
