import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { pointerEvents } from '../pointerEvents';

describe('pointerEvents', () => {
  it('should return a function', () => {
    const result = pointerEvents();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `pointerEvents` as component and css prop', () => {
    const result = pointerEvents()({ pointerEvents: 'inherit' });
    expect(result).toEqual({ pointerEvents: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = pointerEvents<'a'>()({ pointerEvents: 'a' });
    expect(result).toEqual({ pointerEvents: 'a' });
  });

  it('should allow using a theme', () => {
    const result = pointerEvents<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ pointerEvents: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      pointerEvents: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = pointerEvents<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      pointerEvents: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      pointerEvents: 'a',
      [theme.breakpoints.large]: {
        pointerEvents: 'b',
      },
      [theme.breakpoints.medium]: {
        pointerEvents: 'c',
      },
      [theme.breakpoints.small]: {
        pointerEvents: 'd',
      },
    });
  });
});
