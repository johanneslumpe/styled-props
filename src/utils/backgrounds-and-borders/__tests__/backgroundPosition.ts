import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { backgroundPosition } from '../backgroundPosition';

describe('backgroundPosition', () => {
  it('should return a function', () => {
    const result = backgroundPosition();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `backgroundPosition` as component and css prop', () => {
    const result = backgroundPosition()({ backgroundPosition: 'inherit' });
    expect(result).toEqual({ backgroundPosition: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = backgroundPosition<'a'>()({ backgroundPosition: 'a' });
    expect(result).toEqual({ backgroundPosition: 'a' });
  });

  it('should use an interface which marks `backgroundPosition` as optional', () => {
    const result = backgroundPosition<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = backgroundPosition<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ backgroundPosition: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      backgroundPosition: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = backgroundPosition<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      backgroundPosition: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      backgroundPosition: 'a',
      [theme.breakpoints.large]: {
        backgroundPosition: 'b',
      },
      [theme.breakpoints.medium]: {
        backgroundPosition: 'c',
      },
      [theme.breakpoints.small]: {
        backgroundPosition: 'd',
      },
    });
  });
});
