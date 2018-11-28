import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { objectFit } from '../objectFit';

describe('objectFit', () => {
  it('should return a function', () => {
    const result = objectFit();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `objectFit` as component and css prop', () => {
    const result = objectFit()({ objectFit: 'inherit' });
    expect(result).toEqual({ objectFit: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = objectFit<'a'>()({ objectFit: 'a' });
    expect(result).toEqual({ objectFit: 'a' });
  });

  it('should use an interface which marks `objectFit` as optional', () => {
    const result = objectFit<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = objectFit<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ objectFit: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      objectFit: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = objectFit<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      objectFit: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      objectFit: 'a',
      [theme.breakpoints.large]: {
        objectFit: 'b',
      },
      [theme.breakpoints.medium]: {
        objectFit: 'c',
      },
      [theme.breakpoints.small]: {
        objectFit: 'd',
      },
    });
  });
});
