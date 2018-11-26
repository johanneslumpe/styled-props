import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { clip } from '../clip';

describe('clip', () => {
  it('should return a function', () => {
    const result = clip();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `clip` as component and css prop', () => {
    const result = clip()({ clip: 'inherit' });
    expect(result).toEqual({ clip: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = clip<'a'>()({ clip: 'a' });
    expect(result).toEqual({ clip: 'a' });
  });

  it('should allow using a theme', () => {
    const result = clip<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ clip: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      clip: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = clip<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      clip: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      clip: 'a',
      [theme.breakpoints.large]: {
        clip: 'b',
      },
      [theme.breakpoints.medium]: {
        clip: 'c',
      },
      [theme.breakpoints.small]: {
        clip: 'd',
      },
    });
  });
});
