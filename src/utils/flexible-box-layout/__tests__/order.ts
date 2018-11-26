import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { order } from '../order';

describe('order', () => {
  it('should return a function', () => {
    const result = order();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `order` as component and css prop', () => {
    const result = order()({ order: 'inherit' });
    expect(result).toEqual({ order: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = order<'a'>()({ order: 'a' });
    expect(result).toEqual({ order: 'a' });
  });

  it('should allow using a theme', () => {
    const result = order<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ order: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      order: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = order<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      order: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      order: 'a',
      [theme.breakpoints.large]: {
        order: 'b',
      },
      [theme.breakpoints.medium]: {
        order: 'c',
      },
      [theme.breakpoints.small]: {
        order: 'd',
      },
    });
  });
});
