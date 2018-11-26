import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { borderRight } from '../borderRight';

describe('borderRight', () => {
  it('should return a function', () => {
    const result = borderRight();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `borderRight` as component and css prop', () => {
    const result = borderRight()({ borderRight: 'inherit' });
    expect(result).toEqual({ borderRight: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderRight<'a'>()({ borderRight: 'a' });
    expect(result).toEqual({ borderRight: 'a' });
  });

  it('should allow using a theme', () => {
    const result = borderRight<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ borderRight: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      borderRight: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderRight<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      borderRight: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      borderRight: 'a',
      [theme.breakpoints.large]: {
        borderRight: 'b',
      },
      [theme.breakpoints.medium]: {
        borderRight: 'c',
      },
      [theme.breakpoints.small]: {
        borderRight: 'd',
      },
    });
  });
});
