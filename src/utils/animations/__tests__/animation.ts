import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { animation } from '../animation';

describe('animation', () => {
  it('should return a function', () => {
    const result = animation();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `animation` as component and css prop', () => {
    const result = animation()({ animation: 'inherit' });
    expect(result).toEqual({ animation: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = animation<'a'>()({ animation: 'a' });
    expect(result).toEqual({ animation: 'a' });
  });

  it('should allow using a theme', () => {
    const result = animation<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ animation: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      animation: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = animation<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      animation: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      animation: 'a',
      [theme.breakpoints.large]: {
        animation: 'b',
      },
      [theme.breakpoints.medium]: {
        animation: 'c',
      },
      [theme.breakpoints.small]: {
        animation: 'd',
      },
    });
  });
});
