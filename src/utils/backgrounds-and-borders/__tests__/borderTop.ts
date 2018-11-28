import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { borderTop } from '../borderTop';

describe('borderTop', () => {
  it('should return a function', () => {
    const result = borderTop();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `borderTop` as component and css prop', () => {
    const result = borderTop()({ borderTop: 'inherit' });
    expect(result).toEqual({ borderTop: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderTop<'a'>()({ borderTop: 'a' });
    expect(result).toEqual({ borderTop: 'a' });
  });

  it('should use an interface which marks `borderTop` as optional', () => {
    const result = borderTop<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = borderTop<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ borderTop: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      borderTop: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderTop<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      borderTop: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      borderTop: 'a',
      [theme.breakpoints.large]: {
        borderTop: 'b',
      },
      [theme.breakpoints.medium]: {
        borderTop: 'c',
      },
      [theme.breakpoints.small]: {
        borderTop: 'd',
      },
    });
  });
});
