import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { height } from '../height';

describe('height', () => {
  it('should return a function', () => {
    const result = height();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `height` as component and css prop', () => {
    const result = height()({ height: 'inherit' });
    expect(result).toEqual({ height: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = height<'a'>()({ height: 'a' });
    expect(result).toEqual({ height: 'a' });
  });

  it('should allow using a theme', () => {
    const result = height<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ height: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      height: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = height<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      height: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      height: 'a',
      [theme.breakpoints.large]: {
        height: 'b',
      },
      [theme.breakpoints.medium]: {
        height: 'c',
      },
      [theme.breakpoints.small]: {
        height: 'd',
      },
    });
  });
});
