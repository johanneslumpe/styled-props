import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { borderLeft } from '../borderLeft';

describe('borderLeft', () => {
  it('should return a function', () => {
    const result = borderLeft();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `borderLeft` as component and css prop', () => {
    const result = borderLeft()({ borderLeft: 'inherit' });
    expect(result).toEqual({ borderLeft: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderLeft<'a'>()({ borderLeft: 'a' });
    expect(result).toEqual({ borderLeft: 'a' });
  });

  it('should allow using a theme', () => {
    const result = borderLeft<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ borderLeft: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      borderLeft: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderLeft<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      borderLeft: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      borderLeft: 'a',
      [theme.breakpoints.large]: {
        borderLeft: 'b',
      },
      [theme.breakpoints.medium]: {
        borderLeft: 'c',
      },
      [theme.breakpoints.small]: {
        borderLeft: 'd',
      },
    });
  });
});
