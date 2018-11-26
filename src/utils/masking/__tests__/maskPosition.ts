import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { maskPosition } from '../maskPosition';

describe('maskPosition', () => {
  it('should return a function', () => {
    const result = maskPosition();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `maskPosition` as component and css prop', () => {
    const result = maskPosition()({ maskPosition: 'inherit' });
    expect(result).toEqual({ maskPosition: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = maskPosition<'a'>()({ maskPosition: 'a' });
    expect(result).toEqual({ maskPosition: 'a' });
  });

  it('should allow using a theme', () => {
    const result = maskPosition<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ maskPosition: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      maskPosition: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = maskPosition<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      maskPosition: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      maskPosition: 'a',
      [theme.breakpoints.large]: {
        maskPosition: 'b',
      },
      [theme.breakpoints.medium]: {
        maskPosition: 'c',
      },
      [theme.breakpoints.small]: {
        maskPosition: 'd',
      },
    });
  });
});
