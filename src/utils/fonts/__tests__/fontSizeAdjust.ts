import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { fontSizeAdjust } from '../fontSizeAdjust';

describe('fontSizeAdjust', () => {
  it('should return a function', () => {
    const result = fontSizeAdjust();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `fontSizeAdjust` as component and css prop', () => {
    const result = fontSizeAdjust()({ fontSizeAdjust: 'inherit' });
    expect(result).toEqual({ fontSizeAdjust: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = fontSizeAdjust<'a'>()({ fontSizeAdjust: 'a' });
    expect(result).toEqual({ fontSizeAdjust: 'a' });
  });

  it('should use an interface which marks `fontSizeAdjust` as optional', () => {
    const result = fontSizeAdjust<'a'>()({});
    expect(result).toEqual(undefined);
  });

  it('should allow using a theme', () => {
    const result = fontSizeAdjust<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ fontSizeAdjust: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      fontSizeAdjust: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = fontSizeAdjust<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      fontSizeAdjust: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      fontSizeAdjust: 'a',
      [theme.breakpoints.large]: {
        fontSizeAdjust: 'b',
      },
      [theme.breakpoints.medium]: {
        fontSizeAdjust: 'c',
      },
      [theme.breakpoints.small]: {
        fontSizeAdjust: 'd',
      },
    });
  });
});
