import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { direction } from '../direction';

describe('direction', () => {
  it('should return a function', () => {
    const result = direction();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `direction` as component and css prop', () => {
    const result = direction()({ direction: 'inherit' });
    expect(result).toEqual({ direction: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = direction<'a'>()({ direction: 'a' });
    expect(result).toEqual({ direction: 'a' });
  });

  it('should allow using a theme', () => {
    const result = direction<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ direction: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      direction: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = direction<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      direction: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      direction: 'a',
      [theme.breakpoints.large]: {
        direction: 'b',
      },
      [theme.breakpoints.medium]: {
        direction: 'c',
      },
      [theme.breakpoints.small]: {
        direction: 'd',
      },
    });
  });
});
