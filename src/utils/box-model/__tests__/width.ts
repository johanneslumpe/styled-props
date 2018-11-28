import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { width } from '../width';

describe('width', () => {
  it('should return a function', () => {
    const result = width();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `width` as component and css prop', () => {
    const result = width()({ width: 'inherit' });
    expect(result).toEqual({ width: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = width<'a'>()({ width: 'a' });
    expect(result).toEqual({ width: 'a' });
  });

  it('should use an interface which marks `width` as optional', () => {
    const result = width<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = width<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ width: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      width: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = width<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      width: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      width: 'a',
      [theme.breakpoints.large]: {
        width: 'b',
      },
      [theme.breakpoints.medium]: {
        width: 'c',
      },
      [theme.breakpoints.small]: {
        width: 'd',
      },
    });
  });
});
