import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { resize } from '../resize';

describe('resize', () => {
  it('should return a function', () => {
    const result = resize();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `resize` as component and css prop', () => {
    const result = resize()({ resize: 'inherit' });
    expect(result).toEqual({ resize: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = resize<'a'>()({ resize: 'a' });
    expect(result).toEqual({ resize: 'a' });
  });

  it('should allow using a theme', () => {
    const result = resize<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ resize: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      resize: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = resize<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      resize: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      resize: 'a',
      [theme.breakpoints.large]: {
        resize: 'b',
      },
      [theme.breakpoints.medium]: {
        resize: 'c',
      },
      [theme.breakpoints.small]: {
        resize: 'd',
      },
    });
  });
});
