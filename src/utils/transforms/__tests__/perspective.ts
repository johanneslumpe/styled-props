import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { perspective } from '../perspective';

describe('perspective', () => {
  it('should return a function', () => {
    const result = perspective();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `perspective` as component and css prop', () => {
    const result = perspective()({ perspective: 'inherit' });
    expect(result).toEqual({ perspective: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = perspective<'a'>()({ perspective: 'a' });
    expect(result).toEqual({ perspective: 'a' });
  });

  it('should allow using a theme', () => {
    const result = perspective<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ perspective: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      perspective: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = perspective<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      perspective: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      perspective: 'a',
      [theme.breakpoints.large]: {
        perspective: 'b',
      },
      [theme.breakpoints.medium]: {
        perspective: 'c',
      },
      [theme.breakpoints.small]: {
        perspective: 'd',
      },
    });
  });
});
