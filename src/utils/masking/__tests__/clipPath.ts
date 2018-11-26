import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { clipPath } from '../clipPath';

describe('clipPath', () => {
  it('should return a function', () => {
    const result = clipPath();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `clipPath` as component and css prop', () => {
    const result = clipPath()({ clipPath: 'inherit' });
    expect(result).toEqual({ clipPath: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = clipPath<'a'>()({ clipPath: 'a' });
    expect(result).toEqual({ clipPath: 'a' });
  });

  it('should allow using a theme', () => {
    const result = clipPath<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ clipPath: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      clipPath: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = clipPath<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      clipPath: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      clipPath: 'a',
      [theme.breakpoints.large]: {
        clipPath: 'b',
      },
      [theme.breakpoints.medium]: {
        clipPath: 'c',
      },
      [theme.breakpoints.small]: {
        clipPath: 'd',
      },
    });
  });
});
