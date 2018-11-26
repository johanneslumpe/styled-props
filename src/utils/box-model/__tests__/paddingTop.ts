import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { paddingTop } from '../paddingTop';

describe('paddingTop', () => {
  it('should return a function', () => {
    const result = paddingTop();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `paddingTop` as component and css prop', () => {
    const result = paddingTop()({ paddingTop: 'inherit' });
    expect(result).toEqual({ paddingTop: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = paddingTop<'a'>()({ paddingTop: 'a' });
    expect(result).toEqual({ paddingTop: 'a' });
  });

  it('should allow using a theme', () => {
    const result = paddingTop<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ paddingTop: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      paddingTop: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = paddingTop<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      paddingTop: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      paddingTop: 'a',
      [theme.breakpoints.large]: {
        paddingTop: 'b',
      },
      [theme.breakpoints.medium]: {
        paddingTop: 'c',
      },
      [theme.breakpoints.small]: {
        paddingTop: 'd',
      },
    });
  });
});
