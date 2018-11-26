import {
  IBreakpoints,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
} from '../../../test-utils/theme';

import { widows } from '../widows';

describe('widows', () => {
  it('should return a function', () => {
    const result = widows();
    expect(result).toBeInstanceOf(Function);
  });

  it('should use `widows` as component and css prop', () => {
    const result = widows()({ widows: 'inherit' });
    expect(result).toEqual({ widows: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = widows<'a'>()({ widows: 'a' });
    expect(result).toEqual({ widows: 'a' });
  });

  it('should allow using a theme', () => {
    const result = widows<'value', IThemeWithoutBreakpoints>({
      themeProp: 'dummy',
    })({ widows: 'value', theme: themeWithoutBreakpoints });
    expect(result).toEqual({
      widows: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = widows<
      'a' | 'b' | 'c' | 'd',
      ITheme,
      IBreakpoints
    >()({
      widows: {
        base: 'a',
        large: 'b',
        medium: 'c',
        small: 'd',
      },
      theme,
    });
    expect(result).toEqual({
      widows: 'a',
      [theme.breakpoints.large]: {
        widows: 'b',
      },
      [theme.breakpoints.medium]: {
        widows: 'c',
      },
      [theme.breakpoints.small]: {
        widows: 'd',
      },
    });
  });
});
