import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { borderImageOutset } from '../borderImageOutset';

describe('borderImageOutset', () => {
  it('should return a function', () => {
    const result = borderImageOutset();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `borderImageOutset` as component and css prop', () => {
    const result = borderImageOutset()({ borderImageOutset: 'inherit' });
    expect(result).toEqual({ borderImageOutset: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderImageOutset<'a'>()({ borderImageOutset: 'a' });
    expect(result).toEqual({ borderImageOutset: 'a' });
  });

  it('should allow using a theme', () => {
    const result = borderImageOutset<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ borderImageOutset: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      borderImageOutset: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderImageOutset<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      borderImageOutset: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      borderImageOutset: 'a',
      [theme.breakpoints.large]: {
        borderImageOutset: 'b',
      },
      [theme.breakpoints.medium]: {
        borderImageOutset: 'c',
      },
      [theme.breakpoints.small]: {
        borderImageOutset: 'd',
      },
    });
  });
});
