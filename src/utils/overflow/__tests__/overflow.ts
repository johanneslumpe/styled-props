import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { overflow } from '../overflow';

describe('overflow', () => {
  it('should return a function', () => {
    const result = overflow();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `overflow` as component and css prop', () => {
    const result = overflow()({ overflow: 'inherit' });
    expect(result).toEqual({ overflow: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = overflow<'a'>()({ overflow: 'a' });
    expect(result).toEqual({ overflow: 'a' });
  });

  it('should allow using a theme', () => {
    const result = overflow<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ overflow: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      overflow: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = overflow<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      overflow: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      overflow: 'a',
      [theme.breakpoints.large]: {
        overflow: 'b',
      },
      [theme.breakpoints.medium]: {
        overflow: 'c',
      },
      [theme.breakpoints.small]: {
        overflow: 'd',
      },
    });
  });
});
