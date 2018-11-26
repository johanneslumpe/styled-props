import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { margin } from '../margin';

describe('margin', () => {
  it('should return a function', () => {
    const result = margin();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `margin` as component and css prop', () => {
    const result = margin()({ margin: 'inherit' });
    expect(result).toEqual({ margin: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = margin<'a'>()({ margin: 'a' });
    expect(result).toEqual({ margin: 'a' });
  });

  it('should allow using a theme', () => {
    const result = margin<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ margin: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      margin: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = margin<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      margin: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      margin: 'a',
      [theme.breakpoints.large]: {
        margin: 'b',
      },
      [theme.breakpoints.medium]: {
        margin: 'c',
      },
      [theme.breakpoints.small]: {
        margin: 'd',
      },
    });
  });
});
