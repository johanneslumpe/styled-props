import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { unicodeBidi } from '../unicodeBidi';

describe('unicodeBidi', () => {
  it('should return a function', () => {
    const result = unicodeBidi();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `unicodeBidi` as component and css prop', () => {
    const result = unicodeBidi()({ unicodeBidi: 'inherit' });
    expect(result).toEqual({ unicodeBidi: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = unicodeBidi<'a'>()({ unicodeBidi: 'a' });
    expect(result).toEqual({ unicodeBidi: 'a' });
  });

  it('should allow using a theme', () => {
    const result = unicodeBidi<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ unicodeBidi: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      unicodeBidi: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = unicodeBidi<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      unicodeBidi: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      unicodeBidi: 'a',
      [theme.breakpoints.large]: {
        unicodeBidi: 'b',
      },
      [theme.breakpoints.medium]: {
        unicodeBidi: 'c',
      },
      [theme.breakpoints.small]: {
        unicodeBidi: 'd',
      },
    });
  });
});
