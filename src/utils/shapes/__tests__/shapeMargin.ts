import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { shapeMargin } from '../shapeMargin';

describe('shapeMargin', () => {
  it('should return a function', () => {
    const result = shapeMargin();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `shapeMargin` as component and css prop', () => {
    const result = shapeMargin()({ shapeMargin: 'inherit' });
    expect(result).toEqual({ shapeMargin: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = shapeMargin<'a'>()({ shapeMargin: 'a' });
    expect(result).toEqual({ shapeMargin: 'a' });
  });

  it('should allow using a theme', () => {
    const result = shapeMargin<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ shapeMargin: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      shapeMargin: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = shapeMargin<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      shapeMargin: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      shapeMargin: 'a',
      [theme.breakpoints.large]: {
        shapeMargin: 'b',
      },
      [theme.breakpoints.medium]: {
        shapeMargin: 'c',
      },
      [theme.breakpoints.small]: {
        shapeMargin: 'd',
      },
    });
  });
});
